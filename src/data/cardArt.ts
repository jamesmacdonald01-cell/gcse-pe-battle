export interface CardArt {
  sheet:string;
  position:string;
  alt:string;
}

const positions=['0% 0%','50% 0%','100% 0%','0% 100%','50% 100%','100% 100%'];

const sheets:[string,string[]][]=[
  ['/card-art/concepts-1.png',['cardio','muscular','strength','speed','power','flexibility']],
  ['/card-art/concepts-2.png',['agility','balance','coordination','reaction','continuous','interval']],
  ['/card-art/concepts-3.png',['fartlek','circuit','weights','plyometric','flextrain','goals']],
  ['/card-art/concepts-4.png',['rehearsal','feedback','intrinsic','extrinsic','visual','quadriceps']],
  ['/card-art/concepts-5.png',['hamstrings','gastrocnemius','biceps','triceps','cardiac-output','alveoli']],
  ['/card-art/concepts-6.png',['cool-down','ice-bath','massage','refuel']]
];

const descriptions:Record<string,string>={
  cardio:'Runner with illuminated heart and lungs',muscular:'Athlete sustaining repeated rowing pulls',strength:'Athlete lifting a heavy barbell',speed:'Sprinter accelerating with motion trails',power:'Athlete producing an explosive jump',flexibility:'Gymnast demonstrating range of movement',
  agility:'Badminton player changing direction',balance:'Athlete controlling a one-leg balance',coordination:'Athlete tracking moving balls',reaction:'Goalkeeper reacting to a sudden stimulus',continuous:'Distance runner maintaining a steady pace',interval:'Athlete alternating sprint and recovery',
  fartlek:'Runner varying pace across changing terrain',circuit:'Athlete moving through exercise stations',weights:'Athlete completing a controlled squat',plyometric:'Athlete performing an explosive box jump',flextrain:'Coach guiding a safe dynamic stretch',goals:'Athlete planning measurable performance targets',
  rehearsal:'Athlete visualising successful performance',feedback:'Coach giving positive feedback',intrinsic:'Athlete motivated by enjoyment and mastery',extrinsic:'Athlete pursuing an external reward',visual:'Coach demonstrating a movement',quadriceps:'Quadriceps highlighted during knee extension',
  hamstrings:'Hamstrings highlighted during knee flexion',gastrocnemius:'Gastrocnemius highlighted during plantar flexion',biceps:'Biceps highlighted during elbow flexion',triceps:'Triceps highlighted during elbow extension','cardiac-output':'Heart pumping blood during exercise',alveoli:'Alveoli exchanging gases with capillaries',
  'cool-down':'Athlete completing an active cool-down','ice-bath':'Athlete using cold-water immersion',massage:'Post-exercise sports massage',refuel:'Athlete rehydrating with a recovery meal'
};

export const CARD_ART:Record<string,CardArt>=Object.fromEntries(sheets.flatMap(([sheet,ids])=>ids.map((id,index)=>[id,{sheet,position:positions[index],alt:descriptions[id]}])));

export const cardArt=(id:string)=>CARD_ART[id];
