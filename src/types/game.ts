export type CardType='fitness'|'training'|'psychology'|'physiology'|'recovery';
export interface Athlete {id:string;name:string;sport:string;role:string;accent:string;icon:string;image:string;tags:string[];ratings:{pace:number;power:number;endurance:number;technique:number}}
export interface Card {id:string;name:string;type:CardType;cost:number;tags:string[];effect:string;performance:number;stat?:'confidence'|'fatigue'|'injuryRisk';delta?:number}
export interface Stats {performance:number;energy:number;confidence:number;fatigue:number;injuryRisk:number}
export interface SynergyRule {id:string;name:string;requiredTags:string[];athleteTags?:string[];performanceBonus:number;explanation:string}
export interface Question {id:string;paper:1|2;topic:string;subtopic:string;ao:'AO1'|'AO2'|'AO3';difficulty:1|2|3;question:string;options:string[];correctAnswer:string;explanation:string;sportTags?:string[]}
export interface MarkPoint {id:string;label:string;alternatives:string[];weight:number}
export interface Misconception {label:string;alternatives:string[];penalty:number}
export interface OpenQuestion {id:string;paper:1|2;topic:string;subtopic:string;ao:'AO1'|'AO2'|'AO3';difficulty:1|2|3;scenario:string;prompt:string;markPoints:MarkPoint[];misconceptions?:Misconception[];modelAnswer:string;explanation:string;sportTags?:string[]}
export interface MarkResult {score:number;practiceMark:number;maxMark:number;practiceLevel:0|1|2|3;confidence:'HIGH'|'MEDIUM'|'LOW';descriptor:string;earnedWeight:number;totalWeight:number;matched:MarkPoint[];missed:MarkPoint[];misconceptions:string[];band:'STRONG APPLICATION'|'USEFUL KNOWLEDGE'|'DEVELOPING RESPONSE';performanceBonus:number}
export interface EventChoice {text:string;effects:Partial<Record<keyof Stats,number>>;quality:'OPTIMAL'|'USEFUL'|'WEAK';feedback:string}
export interface SportingEvent {id:string;title:string;description:string;choices:EventChoice[];sportTags?:string[]}
export type PowerUpId='double-impact'|'energy-surge'|'written-hint'|'fifty-fifty'|'recovery-shield';
export type PowerUpInventory=Partial<Record<PowerUpId,number>>;
export interface CareerProgress {active:boolean;currentNodeId:string|null;completedIds:string[];badges:string[];powerUps:PowerUpInventory;careerWins:number;runNumber:number;champion:boolean}
export interface MatchRecord {id:string;playedAt:string;athleteId:string;athleteName:string;sport:string;win:boolean;score:number;opponentScore:number;accuracy:number;questionsAnswered:number;questionsCorrect:number;combos:number;bestCombo:string;xp:number;career:boolean}
export interface Profile {name:string;xp:number;wins:number;battles:number;questionsAnswered:number;questionsCorrect:number;tutorialComplete:boolean;career:CareerProgress;matchHistory:MatchRecord[]}
