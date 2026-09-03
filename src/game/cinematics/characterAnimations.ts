export type RigPart='root'|'torso'|'head'|'leftUpperArm'|'leftForearm'|'leftHand'|'rightUpperArm'|'rightForearm'|'rightHand'|'leftUpperLeg'|'leftLowerLeg'|'leftFoot'|'rightUpperLeg'|'rightLowerLeg'|'rightFoot'|'equipment';

export type CharacterPose={rotation?:number;x?:number;y?:number;scaleX?:number;scaleY?:number};
export type PoseFrame={offset:number;pose:CharacterPose;easing?:string};
export type CharacterTimeline={duration:number;tracks:Partial<Record<RigPart,PoseFrame[]>>};
export type CharacterAnimationId='ready'|'charge-attack'|'jump-smash'|'defend-recoil'|'generic-finisher';

const frame=(offset:number,pose:CharacterPose,easing?:string):PoseFrame=>({offset,pose,easing});

export const characterTimelines:Record<CharacterAnimationId,CharacterTimeline>={
 ready:{duration:1200,tracks:{
  root:[frame(0,{y:0}),frame(.5,{y:-3}),frame(1,{y:0})],
  torso:[frame(0,{rotation:6}),frame(.5,{rotation:3}),frame(1,{rotation:6})],
  leftUpperLeg:[frame(0,{rotation:10}),frame(1,{rotation:10})],rightUpperLeg:[frame(0,{rotation:-8}),frame(1,{rotation:-8})],
  leftLowerLeg:[frame(0,{rotation:-14}),frame(1,{rotation:-14})],rightLowerLeg:[frame(0,{rotation:15}),frame(1,{rotation:15})]
 }},
 'charge-attack':{duration:1150,tracks:{
  root:[frame(0,{x:-9,y:8,scaleX:.94,scaleY:.96}),frame(.2,{x:0,y:0}),frame(.55,{x:5,y:-8,scaleX:1.04,scaleY:1.04},'cubic-bezier(.2,.8,.2,1)'),frame(.72,{x:14,y:-2,scaleX:1.08}),frame(1,{x:5,y:0})],
  torso:[frame(0,{rotation:9}),frame(.45,{rotation:-6}),frame(.72,{rotation:13}),frame(1,{rotation:5})],
  head:[frame(0,{rotation:-4}),frame(.55,{rotation:7}),frame(1,{rotation:0})],
  leftUpperArm:[frame(0,{rotation:28}),frame(.45,{rotation:-48}),frame(.72,{rotation:38}),frame(1,{rotation:18})],
  leftForearm:[frame(0,{rotation:-28}),frame(.45,{rotation:-68}),frame(.72,{rotation:-8}),frame(1,{rotation:-22})],
  rightUpperArm:[frame(0,{rotation:-24}),frame(.45,{rotation:42}),frame(.72,{rotation:-54}),frame(1,{rotation:-28})],
  rightForearm:[frame(0,{rotation:30}),frame(.45,{rotation:55}),frame(.72,{rotation:4}),frame(1,{rotation:24})],
  leftUpperLeg:[frame(0,{rotation:18}),frame(.52,{rotation:-16}),frame(.72,{rotation:25}),frame(1,{rotation:9})],
  leftLowerLeg:[frame(0,{rotation:-24}),frame(.52,{rotation:28}),frame(.72,{rotation:-18}),frame(1,{rotation:-12})],
  rightUpperLeg:[frame(0,{rotation:-13}),frame(.52,{rotation:22}),frame(.72,{rotation:-18}),frame(1,{rotation:-6})],
  rightLowerLeg:[frame(0,{rotation:19}),frame(.52,{rotation:-24}),frame(.72,{rotation:25}),frame(1,{rotation:14})]
 }},
 'jump-smash':{duration:1850,tracks:{
  root:[frame(0,{x:0,y:10,scaleX:1,scaleY:.97}),frame(.12,{x:-3,y:27,scaleY:.91},'ease-in'),frame(.26,{x:4,y:-34,scaleY:1.05},'cubic-bezier(.18,.78,.2,1)'),frame(.45,{x:10,y:-105,scaleX:1.06,scaleY:1.06},'ease-out'),frame(.57,{x:12,y:-112,scaleX:1.07,scaleY:1.07}),frame(.61,{x:12,y:-112,scaleX:1.07,scaleY:1.07}),frame(.7,{x:23,y:-92,scaleX:1.08,scaleY:1.03},'cubic-bezier(.12,.8,.18,1)'),frame(.82,{x:28,y:-42}),frame(.92,{x:22,y:15,scaleY:.92},'ease-in'),frame(1,{x:16,y:0,scaleX:1,scaleY:1},'ease-out')],
  torso:[frame(0,{rotation:8}),frame(.12,{rotation:13}),frame(.36,{rotation:-15}),frame(.57,{rotation:-22}),frame(.61,{rotation:-22}),frame(.7,{rotation:24}),frame(.84,{rotation:16}),frame(1,{rotation:5})],
  head:[frame(0,{rotation:-3}),frame(.2,{rotation:-15}),frame(.57,{rotation:-12}),frame(.7,{rotation:9}),frame(1,{rotation:0})],
  leftUpperArm:[frame(0,{rotation:22}),frame(.28,{rotation:-68}),frame(.57,{rotation:-92}),frame(.7,{rotation:-20}),frame(.85,{rotation:36}),frame(1,{rotation:18})],
  leftForearm:[frame(0,{rotation:-32}),frame(.28,{rotation:-26}),frame(.57,{rotation:-14}),frame(.7,{rotation:18}),frame(1,{rotation:-20})],
  rightUpperArm:[frame(0,{rotation:-38}),frame(.3,{rotation:-104}),frame(.5,{rotation:-148}),frame(.57,{rotation:-154}),frame(.61,{rotation:-154}),frame(.69,{rotation:18},'cubic-bezier(.05,.75,.12,1)'),frame(.78,{rotation:76}),frame(1,{rotation:26})],
  rightForearm:[frame(0,{rotation:48}),frame(.3,{rotation:-38}),frame(.57,{rotation:-72}),frame(.61,{rotation:-72}),frame(.69,{rotation:-5}),frame(.78,{rotation:28}),frame(1,{rotation:18})],
  rightHand:[frame(0,{rotation:4}),frame(.57,{rotation:-24}),frame(.61,{rotation:-24}),frame(.69,{rotation:38}),frame(.78,{rotation:56}),frame(1,{rotation:10})],
  equipment:[frame(0,{rotation:0}),frame(.57,{rotation:-18}),frame(.61,{rotation:-18}),frame(.69,{rotation:42}),frame(.78,{rotation:58}),frame(1,{rotation:12})],
  leftUpperLeg:[frame(0,{rotation:16}),frame(.12,{rotation:31}),frame(.34,{rotation:-15}),frame(.57,{rotation:-30}),frame(.7,{rotation:8}),frame(.9,{rotation:24}),frame(1,{rotation:11})],
  leftLowerLeg:[frame(0,{rotation:-28}),frame(.12,{rotation:-52}),frame(.34,{rotation:35}),frame(.57,{rotation:48}),frame(.7,{rotation:12}),frame(.9,{rotation:-40}),frame(1,{rotation:-16})],
  rightUpperLeg:[frame(0,{rotation:-10}),frame(.12,{rotation:-27}),frame(.34,{rotation:23}),frame(.57,{rotation:39}),frame(.7,{rotation:-11}),frame(.9,{rotation:-18}),frame(1,{rotation:-5})],
  rightLowerLeg:[frame(0,{rotation:18}),frame(.12,{rotation:43}),frame(.34,{rotation:-42}),frame(.57,{rotation:-55}),frame(.7,{rotation:-18}),frame(.9,{rotation:35}),frame(1,{rotation:14})]
 }},
 'defend-recoil':{duration:1400,tracks:{
  root:[frame(0,{x:0,y:0}),frame(.35,{x:-4,y:3}),frame(.58,{x:16,y:-5,rotation:4},'cubic-bezier(.1,.8,.2,1)'),frame(.72,{x:27,y:5,rotation:8}),frame(1,{x:13,y:0,rotation:2})],
  torso:[frame(0,{rotation:-3}),frame(.4,{rotation:-10}),frame(.66,{rotation:22}),frame(1,{rotation:7})],
  head:[frame(0,{rotation:0}),frame(.62,{rotation:20}),frame(1,{rotation:8})],
  leftUpperArm:[frame(0,{rotation:-32}),frame(.4,{rotation:-70}),frame(.66,{rotation:-18}),frame(1,{rotation:-35})],
  rightUpperArm:[frame(0,{rotation:34}),frame(.4,{rotation:68}),frame(.66,{rotation:12}),frame(1,{rotation:28})],
  leftUpperLeg:[frame(0,{rotation:12}),frame(.66,{rotation:30}),frame(1,{rotation:18})],rightUpperLeg:[frame(0,{rotation:-10}),frame(.66,{rotation:-25}),frame(1,{rotation:-14})]
 }},
 'generic-finisher':{duration:1500,tracks:{
  root:[frame(0,{x:-18,y:8,scaleX:.94}),frame(.3,{x:0,y:0}),frame(.58,{x:22,y:-12,scaleX:1.1},'cubic-bezier(.1,.78,.15,1)'),frame(.72,{x:35,y:-3}),frame(1,{x:14,y:0})],
  torso:[frame(0,{rotation:8}),frame(.38,{rotation:-13}),frame(.62,{rotation:24}),frame(1,{rotation:7})],
  rightUpperArm:[frame(0,{rotation:-25}),frame(.4,{rotation:-105}),frame(.62,{rotation:58}),frame(1,{rotation:24})],
  rightForearm:[frame(0,{rotation:35}),frame(.4,{rotation:-45}),frame(.62,{rotation:4}),frame(1,{rotation:20})],
  leftUpperArm:[frame(0,{rotation:28}),frame(.4,{rotation:50}),frame(.62,{rotation:-42}),frame(1,{rotation:15})],
  leftUpperLeg:[frame(0,{rotation:15}),frame(.45,{rotation:-20}),frame(.68,{rotation:30}),frame(1,{rotation:8})],rightUpperLeg:[frame(0,{rotation:-12}),frame(.45,{rotation:24}),frame(.68,{rotation:-18}),frame(1,{rotation:-5})]
 }}
};
