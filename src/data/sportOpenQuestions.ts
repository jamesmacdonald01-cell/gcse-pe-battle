import type {OpenQuestion} from '../types/game';

export const sportOpenQuestions:OpenQuestion[]=[
 {
  id:'soq-sprinter',sportTags:['sprinter'],paper:1,topic:'Physical training',subtopic:'Plyometric training',ao:'AO3',difficulty:3,
  scenario:'Your 100 m sprinter is powerful but loses acceleration during the first ten metres.',
  prompt:'Justify why plyometric training could improve the sprinter’s start.',
  markPoints:[{id:'sp1',label:'Plyometrics use explosive jumping or bounding',alternatives:['explosive jumping','jumping and bounding','bounding exercises'],weight:1},{id:'sp2',label:'Develops muscular power',alternatives:['develops power','increase explosive power','strength times speed'],weight:2},{id:'sp3',label:'More forceful acceleration from the blocks',alternatives:['faster acceleration','force from the blocks','more explosive start'],weight:2}],
  modelAnswer:'Plyometric training uses explosive jumping and bounding to develop muscular power, allowing the sprinter to produce a more forceful block start and accelerate faster.',explanation:'The method is specific to the explosive power required at the start of a sprint.'
 },
 {
  id:'soq-marathon',sportTags:['marathon'],paper:1,topic:'Physical training',subtopic:'Continuous training',ao:'AO3',difficulty:2,
  scenario:'Your marathon runner needs to maintain a steady race pace for longer without tiring.',
  prompt:'Explain why continuous training is appropriate for this performer.',
  markPoints:[{id:'ma1',label:'Steady exercise without rest',alternatives:['steady exercise','no rest','continuous work'],weight:1},{id:'ma2',label:'Develops cardiovascular endurance',alternatives:['cardiovascular endurance','aerobic fitness','stamina'],weight:2},{id:'ma3',label:'Specific to prolonged running',alternatives:['specific to marathon','long duration','maintain race pace'],weight:2}],
  modelAnswer:'Continuous training involves steady exercise without rest and develops cardiovascular endurance, making it specific to maintaining a marathon pace for a prolonged period.',explanation:'Training should match the aerobic and continuous demands of the event.'
 },
 {
  id:'soq-football',sportTags:['football'],paper:1,topic:'Physical training',subtopic:'Fartlek training',ao:'AO3',difficulty:3,
  scenario:'Your football midfielder repeatedly walks, jogs and sprints throughout a full match.',
  prompt:'Justify the use of fartlek training for this player.',
  markPoints:[{id:'fo1',label:'Uses varied speeds or intensities',alternatives:['varied speed','changes pace','different intensities'],weight:2},{id:'fo2',label:'Mirrors intermittent match demands',alternatives:['mirrors football','similar to a match','intermittent demands'],weight:2},{id:'fo3',label:'Develops cardiovascular endurance',alternatives:['cardiovascular endurance','aerobic fitness','stamina'],weight:1}],
  modelAnswer:'Fartlek training varies speed and intensity, which mirrors the intermittent demands of football while developing the midfielder’s cardiovascular endurance.',explanation:'Specificity makes the changes of pace especially relevant to football.'
 },
 {
  id:'soq-badminton',sportTags:['badminton'],paper:2,topic:'Sports psychology',subtopic:'Arousal control',ao:'AO3',difficulty:2,
  scenario:'Your badminton player is over-aroused before a deciding game and begins rushing shots.',
  prompt:'Recommend a psychological technique and explain how it could improve performance.',
  markPoints:[{id:'ba1',label:'Names a suitable relaxation technique',alternatives:['controlled breathing','deep breathing','mental rehearsal','positive self talk'],weight:1},{id:'ba2',label:'Reduces excessive arousal or anxiety',alternatives:['reduce arousal','lower anxiety','calm down','less nervous'],weight:2},{id:'ba3',label:'Improves focus and shot control',alternatives:['improve focus','better concentration','controlled shots','stop rushing'],weight:2}],
  modelAnswer:'Controlled breathing would lower excessive arousal and anxiety, helping the badminton player focus and execute shots with greater control.',explanation:'A relaxation technique can move the performer closer to their optimal arousal level.'
 },
 {
  id:'soq-swimmer',sportTags:['swimmer'],paper:1,topic:'Physical training',subtopic:'Muscular endurance',ao:'AO2',difficulty:2,
  scenario:'Your swimmer’s stroke force falls during the final length of a race.',
  prompt:'Explain why muscular endurance is important to this performer.',
  markPoints:[{id:'sw1',label:'Muscles repeat contractions',alternatives:['repeated contractions','muscles contract repeatedly','repeat strokes'],weight:2},{id:'sw2',label:'Resists fatigue',alternatives:['without tiring','delay fatigue','resist fatigue'],weight:2},{id:'sw3',label:'Maintains stroke force or technique',alternatives:['maintain stroke','keep force','maintain technique'],weight:1}],
  modelAnswer:'Muscular endurance allows the swimmer’s muscles to repeat contractions without tiring so stroke force and technique can be maintained late in the race.',explanation:'Swimming requires repeated muscular actions against water resistance.'
 },
 {
  id:'soq-rugby',sportTags:['rugby'],paper:2,topic:'Health, fitness and wellbeing',subtopic:'Recovery nutrition',ao:'AO2',difficulty:2,
  scenario:'Your rugby player has completed a demanding match and must recover before the next fixture.',
  prompt:'Explain what the player should consume and why.',
  markPoints:[{id:'ru1',label:'Carbohydrate replenishes glycogen',alternatives:['carbohydrate replenishes glycogen','restore glycogen','carbs replace energy'],weight:2},{id:'ru2',label:'Protein supports muscle repair',alternatives:['protein repairs muscle','growth and repair','repair tissue'],weight:2},{id:'ru3',label:'Fluid replaces sweat loss',alternatives:['replace fluid','rehydrate','water lost in sweat'],weight:1}],
  modelAnswer:'The player should consume carbohydrate to replenish glycogen, protein to support muscle repair and fluid to replace water lost through sweat.',explanation:'Recovery requires refuelling, tissue repair and rehydration.'
 },
 {
  id:'soq-netball',sportTags:['netball'],paper:1,topic:'Applied anatomy and physiology',subtopic:'Antagonistic muscle action',ao:'AO2',difficulty:2,
  scenario:'Your netball goal shooter extends the knee during take-off for a shot.',
  prompt:'Explain how the quadriceps and hamstrings work together during this action.',
  markPoints:[{id:'ne1',label:'Quadriceps contract as the agonist',alternatives:['quadriceps contract','quadriceps agonist','quadriceps are prime mover'],weight:2},{id:'ne2',label:'Hamstrings relax as the antagonist',alternatives:['hamstrings relax','hamstrings antagonist','opposing muscle relaxes'],weight:2},{id:'ne3',label:'The knee extends',alternatives:['knee extends','knee extension','leg straightens'],weight:1}],
  modelAnswer:'The quadriceps contract as the agonist to extend the knee while the hamstrings relax as the antagonist.',explanation:'This antagonistic muscle action produces the knee extension used during take-off.'
 },
 {
  id:'soq-basketball',sportTags:['basketball'],paper:1,topic:'Physical training',subtopic:'Interval training',ao:'AO3',difficulty:3,
  scenario:'Your basketball guard repeatedly sprints during fast breaks and then recovers during stoppages.',
  prompt:'Justify why interval training is appropriate for this performer.',
  markPoints:[{id:'bk1',label:'Alternates work and recovery',alternatives:['work and recovery','work rest periods','intervals with rest'],weight:2},{id:'bk2',label:'Develops repeated high-intensity effort',alternatives:['repeat sprints','high intensity efforts','anaerobic fitness'],weight:2},{id:'bk3',label:'Matches basketball’s intermittent demands',alternatives:['specific to basketball','mirrors the game','intermittent sport'],weight:1}],
  modelAnswer:'Interval training alternates work and recovery, developing the ability to repeat high-intensity sprints in a way that matches basketball’s intermittent demands.',explanation:'The work-to-recovery pattern makes the method sport specific.'
 },
 {
  id:'soq-golf',sportTags:['golf'],paper:2,topic:'Sports psychology',subtopic:'Mental rehearsal',ao:'AO3',difficulty:2,
  scenario:'Your golfer is anxious before a precision approach shot on the final hole.',
  prompt:'Explain how mental rehearsal could improve the shot.',
  markPoints:[{id:'go1',label:'Pictures successful technique',alternatives:['visualise the shot','picture success','rehearse the swing'],weight:2},{id:'go2',label:'Reduces anxiety or controls arousal',alternatives:['reduce anxiety','control arousal','calm the golfer'],weight:2},{id:'go3',label:'Improves confidence or focus',alternatives:['increase confidence','improve focus','better concentration'],weight:1}],
  modelAnswer:'The golfer can picture a successful swing and ball flight, reducing anxiety while improving confidence and focus before the shot.',explanation:'Mental rehearsal creates a mental image of successful performance without physical fatigue.'
 },
 {
  id:'soq-gymnastics',sportTags:['gymnastics'],paper:1,topic:'Physical training',subtopic:'Components of fitness',ao:'AO2',difficulty:2,
  scenario:'Your artistic gymnast must complete a wide split leap and then hold a controlled landing during a floor routine.',
  prompt:'Explain how flexibility and balance work together to improve this performance.',
  markPoints:[{id:'gy1',label:'Flexibility increases range of movement',alternatives:['increase range of movement','greater range of motion','move through a wider range'],weight:2},{id:'gy2',label:'Supports the split position or correct technique',alternatives:['perform the split','split position','correct leap technique','extended body position'],weight:1},{id:'gy3',label:'Balance keeps the centre of mass over the base of support',alternatives:['centre of mass over base of support','center of mass over base of support','maintain centre of mass','keep stable'],weight:2},{id:'gy4',label:'Allows a controlled landing or finish',alternatives:['controlled landing','stick the landing','stable finish','avoid stepping'],weight:1}],
  modelAnswer:'Flexibility gives the gymnast the range of movement required for a wide split position, while balance keeps the centre of mass over the base of support so the landing can be held under control.',explanation:'The two components support different demands of the same routine: movement range and postural control.'
 },
 {
  id:'soq-cricket',sportTags:['cricket'],paper:1,topic:'Physical training',subtopic:'Components of fitness',ao:'AO2',difficulty:2,
  scenario:'Your wicket keeper must catch a fast deflection with almost no warning.',
  prompt:'Explain how reaction time and coordination work together in this situation.',
  markPoints:[{id:'cr1',label:'Reaction time starts the response quickly',alternatives:['react quickly','reaction time starts response','respond to stimulus'],weight:2},{id:'cr2',label:'Coordination controls eyes, hands and gloves',alternatives:['hand eye coordination','eyes and hands together','control the gloves'],weight:2},{id:'cr3',label:'Completes the catch',alternatives:['catch the ball','take the catch','secure the ball'],weight:1}],
  modelAnswer:'Reaction time allows the wicket keeper to begin moving quickly after the deflection, while hand-eye coordination controls the gloves to complete the catch.',explanation:'The components combine because detecting the stimulus must be followed by an accurate movement.'
 },
 {
  id:'soq-boxing',sportTags:['boxing'],paper:1,topic:'Physical training',subtopic:'Interval training',ao:'AO3',difficulty:2,
  scenario:'Your boxer must repeat short, high-intensity combinations throughout several rounds with recovery between rounds.',
  prompt:'Justify why interval training is appropriate for this boxer.',
  markPoints:[{id:'bx1',label:'Alternates periods of work and recovery',alternatives:['work and recovery','work rest periods','intervals with rest'],weight:2},{id:'bx2',label:'Develops repeated high-intensity effort',alternatives:['repeat high intensity efforts','repeated combinations','anaerobic fitness','maintain intense work'],weight:2},{id:'bx3',label:'Work-to-rest pattern can match boxing rounds',alternatives:['matches boxing rounds','specific to boxing','mirrors rounds','sport specific'],weight:1}],
  modelAnswer:'Interval training alternates high-intensity work with recovery, developing the boxer’s ability to repeat forceful combinations. The work-to-rest structure can be planned to mirror the demands of boxing rounds.',explanation:'The method is appropriate because both its intensity and recovery pattern can be made specific to boxing.'
 }
];
