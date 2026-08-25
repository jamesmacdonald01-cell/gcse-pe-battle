import type {CareerProgress,MatchRecord,Profile} from '../types/game';
const KEY='gcse-pe-battle-profile-v1';
export const freshCareer=():CareerProgress=>({active:false,currentNodeId:null,completedIds:[],badges:[],powerUps:{},careerWins:0,runNumber:1,champion:false});
export const persistence={
 load():Profile|null{try{const raw=localStorage.getItem(KEY);if(!raw)return null;const p=JSON.parse(raw);if(typeof p.name!=='string')return null;const career={...freshCareer(),...(p.career||{})};const matchHistory=(Array.isArray(p.matchHistory)?p.matchHistory:[]).filter((match:MatchRecord)=>match&&typeof match.id==='string'&&typeof match.sport==='string').slice(0,100);return{name:p.name,xp:Number(p.xp)||0,wins:Number(p.wins)||0,battles:Number(p.battles)||0,questionsAnswered:Number(p.questionsAnswered)||0,questionsCorrect:Number(p.questionsCorrect)||0,tutorialComplete:p.tutorialComplete===true,matchHistory,career:{...career,completedIds:Array.isArray(career.completedIds)?career.completedIds:[],badges:Array.isArray(career.badges)?career.badges:[],powerUps:career.powerUps&&typeof career.powerUps==='object'?career.powerUps:{}}}}catch{return null}},
 save(profile:Profile){try{localStorage.setItem(KEY,JSON.stringify(profile))}catch{/* game remains playable */}}
};
