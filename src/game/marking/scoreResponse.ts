import type {MarkPoint,MarkResult,OpenQuestion} from '../../types/game';

const normalise=(value:string)=>value.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();

const aliases:Record<string,string>={repairs:'repair',repaired:'repair',repairing:'repair',recovery:'repair',recover:'repair',recovers:'repair',muscles:'muscle',proteins:'protein',carbs:'carbohydrate',carbohydrates:'carbohydrate',fluids:'fluid',rehydrate:'hydrate',rehydration:'hydrate',hydration:'hydrate',pumps:'pump',pumping:'pump',pumped:'pump',increases:'increase',increased:'increase',increasing:'increase',decreases:'decrease',decreased:'decrease',decreasing:'decrease',delivers:'deliver',delivery:'deliver',delivering:'deliver',removes:'remove',removed:'remove',removing:'remove',working:'work',works:'work',supplies:'supply',supplied:'supply',supports:'support',supported:'support',replenishes:'replenish',replenished:'replenish',restores:'restore',restored:'restore'};
const canonical=(word:string)=>aliases[word]??(word.length>4&&word.endsWith('s')?word.slice(0,-1):word);

// Optimal-string-alignment distance treats an adjacent transposition as one typo.
const distance=(a:string,b:string)=>{
 const matrix=Array.from({length:a.length+1},()=>Array<number>(b.length+1).fill(0));
 for(let i=0;i<=a.length;i++)matrix[i][0]=i;
 for(let j=0;j<=b.length;j++)matrix[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){
  matrix[i][j]=Math.min(matrix[i-1][j]+1,matrix[i][j-1]+1,matrix[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])matrix[i][j]=Math.min(matrix[i][j],matrix[i-2][j-2]+1);
 }
 return matrix[a.length][b.length];
};

const tokenMatches=(needle:string,tokens:string[])=>{const target=canonical(needle);return tokens.some(token=>{const candidate=canonical(token);return candidate===target||(target.length>=5&&candidate.length>=5&&distance(target,candidate)<=1)})};
const phraseMatches=(phrase:string,response:string,tokens:string[],lenient=true)=>{
 const clean=normalise(phrase);if(response.includes(clean))return true;
 const meaningful=clean.split(' ').filter(word=>(word.length>2||word==='no'||word==='not')&&!['the','and','with','from','into','more','for','that','this'].includes(word));
 const hits=meaningful.filter(word=>tokenMatches(word,tokens)).length;
 const required=lenient&&meaningful.length>=3?Math.max(2,Math.ceil(meaningful.length*.66)):meaningful.length;
 return meaningful.length>0&&hits>=required;
};
const pointMatches=(point:{alternatives:string[]},response:string,tokens:string[],lenient=true)=>point.alternatives.some(phrase=>phraseMatches(phrase,response,tokens,lenient));

export const scoreResponse=(question:OpenQuestion,answer:string):MarkResult=>{
 const response=normalise(answer),tokens=response.split(' ').filter(Boolean);
 const matched:MarkPoint[]=[],missed:MarkPoint[]=[];
 question.markPoints.forEach(point=>(pointMatches(point,response,tokens)?matched:missed).push(point));
 const totalWeight=question.markPoints.reduce((sum,point)=>sum+point.weight,0);
 const earnedWeight=matched.reduce((sum,point)=>sum+point.weight,0);
 const misconceptions=(question.misconceptions??[]).filter(item=>pointMatches(item,response,tokens,false));
 const penalty=misconceptions.reduce((sum,item)=>sum+item.penalty,0);
 const score=Math.max(0,Math.min(100,Math.round(earnedWeight/totalWeight*100-penalty)));
 const coverage=matched.length/question.markPoints.length;
 const practiceLevel:0|1|2|3=score>=75?3:score>=45?2:score>0?1:0;
 const confidence:'HIGH'|'MEDIUM'|'LOW'=tokens.length>=15&&coverage>=.7&&misconceptions.length===0?'HIGH':tokens.length>=8&&matched.length>=1?'MEDIUM':'LOW';
 const descriptor=practiceLevel===3?'Clear and developed knowledge is applied effectively to the sporting situation.':practiceLevel===2?'Relevant knowledge is applied, although some links or explanations need greater development.':practiceLevel===1?'Some relevant knowledge is shown, but application to the performer is limited or unclear.':'No creditable authored concepts were confidently identified.';
 return{score,practiceMark:Math.round(score/100*totalWeight),maxMark:totalWeight,practiceLevel,confidence,descriptor,earnedWeight,totalWeight,matched,missed,misconceptions:misconceptions.map(item=>item.label),band:score>=75?'STRONG APPLICATION':score>=45?'USEFUL KNOWLEDGE':'DEVELOPING RESPONSE',performanceBonus:Math.round(score/10)};
};
