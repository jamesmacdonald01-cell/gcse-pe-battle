# Cinematic character assets

The current files in `public/athletes` are opaque, flattened RGB PNG photographs. They contain a baked-in background and no independently addressable body parts. They are suitable for static athlete cards, but not for limb animation.

`BattleCharacter` therefore keeps cinematic rendering separate from card UI and supports two modes:

- `rigged`: the current production mode. A nested, articulated DOM rig provides head, torso, upper/lower limbs, hands, feet and sport equipment. The photograph is only cropped into a small identity detail.
- `cutout`: a transitional whole-character renderer for future transparent PNG/WebP cut-outs. It can use anticipation, movement and recoil but cannot articulate joints.

For a future illustrated character pack, supply one transparent asset per body part with consistent canvas dimensions and joint metadata for shoulder, elbow, wrist, hip, knee and ankle anchors. Equipment should be separate and parented to the relevant hand. The existing `CharacterTimeline` pose tracks can then drive those illustrated layers without changing scoring, card UI or battle-stage orchestration.
