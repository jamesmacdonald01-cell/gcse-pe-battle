export const GAME_RULES={
 rounds:5,
 energyPerRound:3,
 handSize:6,
 deckSize:10,
 draftOfferSize:5,
 draftPickSize:2,
 draftRounds:5,
 phaseOrder:['BUILD','RESPOND','TACTICAL GAMBLE','COMPETE'] as const,
 performanceLabel:'Performance Score'
};

export const TUTORIAL_RULES={
 playerAthleteId:'sprinter',
 opponentAthleteId:'marathon',
 cardIds:['speed','interval','feedback','strength','ice-bath'],
 requiredCardIds:['speed','interval'],
 synergyId:'fastrepeat',
 opponentPerformance:22
};

export const HOW_TO_PLAY_STEPS=[
 {number:'01',icon:'draft',title:'DRAFT',description:`Your opening ${GAME_RULES.draftOfferSize} contain a signature sport pair and three random cards. Choose ${GAME_RULES.draftPickSize}; later offers are random.`},
 {number:'02',icon:'energy',title:'BUILD',description:`Flip cards to read their revision notes, then choose Play This Card. Spend up to ${GAME_RULES.energyPerRound} Energy per round.`},
 {number:'03',icon:'combine',title:'COMBINE',description:'Link scientifically related cards to trigger a Performance bonus, then see the exact score and GCSE PE reason.'},
 {number:'04',icon:'respond',title:'RESPOND',description:'Make a coaching decision in a realistic situation from your chosen athlete’s sport.'},
 {number:'05',icon:'knowledge',title:'APPLY',description:'Answer questions from your sport and the wider GCSE PE syllabus. Read the explanation after answering. A–D positions are shuffled each time.'},
 {number:'06',icon:'compete',title:'COMPETE',description:`Finish ${GAME_RULES.rounds} rounds with the highest adjusted Performance Score.`},
 {number:'07',icon:'combine',title:'POWER UP',description:'In Road to Victory, mini-game detours award consumable cards. Activate each card only in its matching battle phase.'}
];

export const CARD_CATEGORY_GUIDE=[
 {id:'fitness',label:'Fitness',description:'Components such as speed, power and endurance.'},
 {id:'training',label:'Training',description:'Methods such as intervals, weights and plyometrics.'},
 {id:'physiology',label:'Physiology',description:'Muscles, movement and cardio-respiratory responses.'},
 {id:'recovery',label:'Recovery',description:'Cool-down, refuelling, ice baths and massage.'},
 {id:'psychology',label:'Psychology',description:'Confidence, motivation, guidance and goal setting.'}
];
