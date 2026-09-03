import {useEffect,useRef} from 'react';
import './characters.css';
import type {Athlete} from '../../types/game';
import {characterTimelines,type CharacterAnimationId,type CharacterPose,type RigPart} from './characterAnimations';

export type BattleCharacterMode='cutout'|'rigged';

interface BattleCharacterProps{athlete:Athlete;side:'player'|'opponent';animation:CharacterAnimationId;mode?:BattleCharacterMode;delay?:number;className?:string}

const transformFor=(pose:CharacterPose)=>`translate(${pose.x??0}px, ${pose.y??0}px) rotate(${pose.rotation??0}deg) scale(${pose.scaleX??1}, ${pose.scaleY??1})`;

/**
 * Cinematic-only character renderer. It deliberately has no card markup or game-state logic.
 * Current athlete PNGs are opaque flattened photographs, so they cannot supply articulated limbs.
 * Rigged mode therefore uses a stylised nested DOM rig and only crops the photo into a small face ID.
 * Cutout mode is ready for future transparent full-body art; it must not be used with today's opaque PNGs.
 */
export function BattleCharacter({athlete,side,animation,mode='rigged',delay=0,className=''}:BattleCharacterProps){
 const characterRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const node=characterRef.current;
  if(!node||mode!=='rigged'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const timeline=characterTimelines[animation];
  const running:Animation[]=[];
  for(const [part,frames] of Object.entries(timeline.tracks) as [RigPart,NonNullable<(typeof timeline.tracks)[RigPart]>][]){
   const target=node.querySelector<HTMLElement>(`[data-rig-part="${part}"]`);
   if(!target||!frames?.length)continue;
   running.push(target.animate(frames.map(item=>({offset:item.offset,transform:transformFor(item.pose),easing:item.easing??'linear'})),{duration:timeline.duration,delay,fill:'both',easing:'linear'}));
  }
  return()=>running.forEach(item=>item.cancel());
 },[animation,delay,mode]);

 if(mode==='cutout')return <div ref={characterRef} className={`battle-character cutout-character ${side} ${className}`} style={{'--character-accent':athlete.accent} as React.CSSProperties}><img src={athlete.image} alt=""/></div>;

 return <div ref={characterRef} className={`battle-character rigged-character ${side} motion-${animation} ${className}`} style={{'--character-accent':athlete.accent} as React.CSSProperties} aria-label={`${athlete.name} animated ${athlete.sport} character`}>
  <div className="character-energy-shadow"/>
  <div className="rig-root" data-rig-part="root">
   <div className="rig-torso" data-rig-part="torso">
    <div className="rig-head" data-rig-part="head"><span className="rig-face"><img src={athlete.image} alt=""/></span><i className="rig-visor"/></div>
    <div className="rig-arm left" data-rig-part="leftUpperArm"><i className="rig-joint shoulder"/><div className="rig-forearm" data-rig-part="leftForearm"><i className="rig-joint elbow"/><div className="rig-hand" data-rig-part="leftHand"/></div></div>
    <div className="rig-arm right" data-rig-part="rightUpperArm"><i className="rig-joint shoulder"/><div className="rig-forearm" data-rig-part="rightForearm"><i className="rig-joint elbow"/><div className="rig-hand racket-hand" data-rig-part="rightHand">{athlete.id==='badminton'&&<div className="rig-equipment racket" data-rig-part="equipment"><i className="racket-shaft"/><i className="racket-head"/></div>}</div></div></div>
    <div className="rig-core"><i/><i/><i/></div>
    <div className="rig-leg left" data-rig-part="leftUpperLeg"><i className="rig-joint hip"/><div className="rig-lower-leg" data-rig-part="leftLowerLeg"><i className="rig-joint knee"/><div className="rig-foot" data-rig-part="leftFoot"/></div></div>
    <div className="rig-leg right" data-rig-part="rightUpperLeg"><i className="rig-joint hip"/><div className="rig-lower-leg" data-rig-part="rightLowerLeg"><i className="rig-joint knee"/><div className="rig-foot" data-rig-part="rightFoot"/></div></div>
   </div>
  </div>
 </div>;
}
