import { Room, Client } from "colyseus";
import { GameState, LogTone, type Contact } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
import { HailDirector } from "../sim/hails";
import { RoomPacks } from "../mods/roomPacks";
interface TestOptions {
    forceEncounter?: string;
    forceHail?: string;
    forceHailHold?: boolean;
    forceScanNear?: boolean;
    forceScanDone?: boolean;
    forceQship?: boolean;
    forceEnemyClass?: string;
    forceFleeFraction?: number;
    startSalvage?: number;
    forceAnomaly?: string;
    forceQuest?: string;
    forceSurveyPicks?: number;
    forceAnomalyOutcome?: string;
    forcePoiOutcome?: string;
    startProbes?: number;
    forceCallNow?: boolean;
    forceCallEverySec?: number;
    forceJamHold?: boolean;
    forceProbeEndHold?: boolean;
    forceCall?: string;
    forceCallOutcome?: string;
    forceOutage?: string;
    forceOutageEasy?: boolean;
    forceOutageDirector?: boolean;
    outageShieldBlockChance?: number;
    forceOutageExpireSec?: number;
    forceOutageHold?: boolean;
    forceBankRows?: number;
    forceBankVessels?: number;
    forceBoss?: string;
    forceSwarm?: boolean;
    forceInvulnerable?: boolean;
    forceHullZeroSec?: number;
    forceReactorHeat?: number;
    forceSystemDamage?: string;
    forceCampaign?: string;
    forceUnmakingFront?: number;
    forceEvacSpoolSec?: number;
    forceContactSector?: number;
    startRep?: string;
    forceBluff?: string;
    reconnectGraceSec?: number;
    forceProbeLayout?: number;
    forceProbeCreature?: string;
    forceProbeProximity?: number;
    forceProbeResolve?: string;
    forceProbeResolveSec?: number;
    forceProbeLaunch?: boolean;
    forceBoot?: boolean;
    bootSec?: number;
    forceSignalVoice?: string;
    forceTrap?: boolean;
    merchantEveryCleared?: number;
    forceDebrisHazard?: boolean;
    shortCrewLaunch?: boolean;
    demo?: boolean;
}
export declare function hybridModules(state: GameState): {
    autoJam: boolean;
    slimEng: boolean;
};
/** Whether a room created with these join options runs the launch BOOT gate (see onCreate). */
export declare function bootEnabledFor(options: object | undefined, knobsOn: boolean): boolean;
export declare class BridgeRoom extends Room<GameState> {
    maxClients: number;
    /** Language Packs (Phase 2a): the pack list, the active pack and its delivery. */
    readonly packs: RoomPacks;
    /**
     * What Code Mods keep in the run's save, by Mod id (docs/MODDING.md "Code Mods"). Written into each checkpoint, restored on
     * CONTINUE, cleared by a fresh launch and by the trip home. Mods reach it through `game.save`, which limits its size.
     */
    readonly modData: Map<string, unknown>;
    /** Viewports that joined as a REMOTE guest (?remote=1: a Steam invite or JOIN A GAME) — their machine is not
     * this server's, so they may not change this machine's settings.json (setStreamerMode). */
    readonly remoteViewports: Set<string>;
    onCreate(options: {
        roomCode?: string;
    } & TestOptions): void;
    onUncaughtException(err: Error, methodName: string): void;
    private inRadiation;
    private ramGuard;
    private enemyCooldowns;
    private enemyDamageMul;
    private enemyTorpedoes;
    private plan;
    private derelictTrap;
    private derelictScanned;
    private anomalyOutcomes;
    private anomalyResolved;
    private anomalyMilestonesFired;
    private anomalyRng;
    private galaxyRng;
    private signalRolled;
    private completedQuestIds;
    private poiPlans;
    private poiCurseArmed;
    private poiCurseTimer;
    private curseHeldLogged;
    private infestSec;
    private sentinelShowdownIds;
    private callTimer;
    private jamHopTimer;
    private jamHopTarget;
    private jamHopDrift;
    private jamLockIntegral;
    private jamRng;
    private enemiesSpawned;
    private outageSystemId;
    private outageExpireTimer;
    private outageRollTimer;
    private outageJumpBeatLogged;
    private outageRng;
    private jumpTimer;
    private logSeq;
    private profileId;
    readonly hails: HailDirector;
    /** The HUNTER elite's contact id ("" = none). The taunt speaker; never yields. */
    hunterContactId: string;
    /** DEMO BUILD: this room plays the capped Next Fest slice. Mirrored onto
     * state.demo for the clients; the cap itself is enforced server-side only. */
    private demoMode;
    private testForceEncounter;
    private testForceHail;
    private testForceQship;
    private testForceEnemyClass;
    private testForceFleeFraction;
    private testStartSalvage;
    private testForceAnomaly;
    private testForceQuest;
    private testForceSurveyPicks;
    private testForceAnomalyOutcome;
    private testForcePoiOutcome;
    private testStartProbes;
    private testReconnectGraceSec;
    private testForceProbeLayout;
    private testForceProbeCreature;
    private testForceProbeResolve;
    private testForceProbeLaunch;
    private testForceProbeEndHold;
    private testForceProbeResolveSec;
    private testProbeLaunchTimer;
    private probeAutoLaunched;
    private testForceScanDone;
    private testForceScanNear;
    private testForceBankVessels;
    private testForceBankRows;
    private testScanDoneTimer;
    private bootEnabled;
    private testBootSec;
    private bootTimer;
    private bootHostSkipped;
    private bootPending;
    private testForceSignalVoice;
    private testForceTrap;
    private probeRng;
    private probeCreature;
    private probeOutcome;
    private probeOrdered;
    private probeSpeed;
    private probeBurst;
    private probeTimer;
    private probeArcTimer;
    private probeCollapse;
    private probeFogAt;
    private probeProxTier;
    private testForceProbeProximity;
    private probeSweepLastDeg;
    private probeResolveTimer;
    private testForceCallNow;
    private testForceCall;
    private testForceCallEverySec;
    private testForceCallOutcome;
    private testForceJamHold;
    private testForceOutage;
    private testForceOutageEasy;
    private testForceOutageDirector;
    private testOutageShieldBlockChance;
    private testForceOutageExpireSec;
    private testForceOutageHold;
    private testForceOutageTimer;
    private testForceBoss;
    private testForceSwarm;
    private testForceInvulnerable;
    private testForceHullZeroTimer;
    private testForceReactorHeat;
    private testForceSystemDamage;
    private testForceDamageTimer;
    private testForceCampaign;
    private testForceUnmakingFront;
    private testForceEvacSpoolSec;
    private testForceContactSector;
    private testStartRep;
    /** Dev/test-only (m24): pins the bluff and fear-check scatter rolls
     * ("worked"/"called"). PUBLIC — the hail director reads it (the
     * forceQship/forceHail precedent); real clients can never set it
     * (SCC_TEST_KNOBS gate in onCreate). */
    testForceBluff: string;
    private autoRepairTarget;
    private autoRepairStalled;
    private bossHackTimer;
    private leviathanScanPaid;
    private leviathanBrooded;
    private skittishFleeing;
    private pulseTimers;
    private gravityWarned;
    private inShroud;
    private campaignStage;
    private campaignActive;
    private podAttempts;
    private lastFrontBand;
    private frontArmed;
    private frontArrivalWarnTimer;
    private huskIds;
    private huskSeen;
    private evacIds;
    private evacSpool;
    private evacJumped;
    private evacResolved;
    private evacPleaTimer;
    private interceptSeq;
    private sigintCallLeaked;
    private sigintFleeing;
    private sigintRail;
    private sigintHuskTimer;
    private sectorClearCounted;
    private merchantCountdown;
    private debrisHeartId;
    private testMerchantEveryCleared;
    private testForceDebrisHazard;
    private testShortCrewLaunch;
    update(dtMs: number): void;
    log(text: TextStr, tone?: LogTone): void;
    private hybridTick;
    /** Health fraction 0..1 of a repairable target id — HULL reads hull/maxHull. */
    private repairablePct;
    private encounterTick;
    /**
     * DEMO BUILD: the run ends because the crew jumped out of the last demo sector.
     * A deliberate sibling of the hull<=0 block above — same teardown, same banking,
     * same snapshot rule — differing only in WHY, which rides on state.demoComplete.
     *
     * Reuses Phase.GAMEOVER rather than adding Phase.VICTORY: every consumer already
     * understands GAMEOVER as "run over, show the summary, offer restart/lobby", and
     * a new phase would have to be taught to a dozen client sites plus every driver.
     * The discriminator is one boolean.
     */
    private endDemo;
    /** Any live hostile on the plot (the checkCompletion/stand-down predicate:
     * DORMANT envoys and SURRENDERED hulls are not hostiles). */
    private hostilesPresent;
    /** Count this sector as CLEARED (once — the latch) and, on every
     * merchantEveryCleared-th clear, arm the supply-line countdown: the
     * all-clear beat lands, THEN the sail lights up (merchantTick). */
    private countSectorCleared;
    /** The supply-line merchant's arrival fuse. Holds at 0 through a re-ignited
     * fight (fires on the next all-clear) and while another merchant is still
     * on the plot; a jump forfeits it (applyEncounter disarms on arrival). */
    private merchantTick;
    /** DEBRIS STORM upkeep: any storm rock (a moving asteroid) past recycleDist
     * re-enters upwind — against its velocity bearing ± the front's jitter — in
     * the spawn band. Same contact, same designator: clients interpolate the
     * jump, which happens outside sensor focus by construction (recycleDist >
     * spawnDistMax). The storm never thins. */
    private debrisStormTick;
    /** A BIG storm rock's impact reached the HULL (resolveCollisions measured it
     * through the shield soak) → a system drops. The existing outage machinery
     * owns the rest: one live outage at a time, OUTAGE_TARGETS pool, REROUTE. */
    private onDebrisHullHit;
    private anomalyTick;
    private applyAnomalyOutcome;
    advanceQuest(questId: string, toStage: number): boolean;
    private advanceCampaign;
    /** Stage-1 side effect: the Void's guardians wake — hot, contained like
     * every hostile spawn (FIRST_CONTACT rule). Labeled as guardians; the scan
     * gate (identified) is unchanged. */
    private wakeVoidGuardians;
    /** Campaign survey dressing: the ark's and the relay's POI labels are
     * rewritten at spawn (CRYSTAL SLEEPER POD / THE ARCHIVE / SEVERED RECORD) so
     * the shared core/signal label pools stay clean for every other body. */
    private dressCampaignPois;
    private spawnSectorAnomalies;
    private resolveDeaths;
    private checkCompletion;
    completeEncounter(rewardOverride?: number): void;
    escalateToCombat(reason: TextStr): void;
    spawnDistressResponse(): void;
    spawnQshipEscorts(): void;
    private poiSurveyTick;
    /** Helm lays in a jump destination on the star map (HELM-gated upstream in
     * applyIntent). "" always clears — the next jump then picks a random linked
     * system (the emergency-jump rule). A named system must exist AND be
     * reachable from here: a normal lane (links) or this system's charted
     * wormhole (wormholeTo). Returns a reject reason, or null on success. */
    setDestination(systemId: string): string | null;
    /** Missile-rack spacing (spam = a volley, one dart per cooldownSec). Room-
     * private on purpose: the contract synced only railCooldown; the rack pace is
     * fast enough that the button spam IS the UI. */
    private missileCooldown;
    /** Helm's spine gun: a slug along the CURRENT actual bow — aimed by steering
     * the ship, countered only by dodging (PD ignores RAIL; decoys/ECM do nothing). */
    fireRailgun(): string | null;
    /** Helm's decoy charge: ejected astern-ish, ignites after a short fuse, then
     * lures/absorbs MISSILES and ROCKETS only (torpedo seekers ignore flares —
     * they home on ship signature and a flare emits none). */
    deployFlare(): string | null;
    /** Tactical's homing dart: needs a live target LOCK (ship.targetId — it
     * chases the lock, unlike the signature-seeking torpedo). Kicked off the rail
     * up to ±wildOffsetDeg with a wildSec unguided corkscrew (the frantic launch),
     * then the seeker head takes over (sim/projectiles.ts). */
    fireMissile(): string | null;
    /** Tactical's cheap unguided slug on a compass bearing (tube-style straight
     * run, proximity fuse) — counterable by PD and flares, spam away. */
    fireRocket(bearingDeg: number): string | null;
    /** Laser/gatling/rocket pull pacing + the laser overheat latch. Room-private
     * like missileCooldown: the pace is fast enough that button spam IS the UI;
     * the synced pressure gauge is ship.cupolaHeat. */
    private cupolaLaserCooldown;
    private cupolaGatlingCooldown;
    private cupolaRocketCooldown;
    /** Overheat lockout latch (hysteresis): set when cupolaHeat crosses
     * overheatAt, holds the LASER down until the heat cools to resumeAt. */
    private cupolaOverheated;
    /** Is the Cupola seat held by a CONNECTED officer? The supersede switch: a
     * live human on the battery replaces tactical's auto-PD (and only a live
     * one — a dropped phone hands point defense back to the computer). */
    cupolaManned(): boolean;
    /** Powered-mount cycle time: the turret precedent (shared gunCooldown shape) —
     * a starved WEAPONS bus stretches the pace via the same powerRatio the gun
     * turrets read, floored at 15% so the battery never fully stalls. */
    private cupolaCycle;
    /** Per-tick battery upkeep: pull pacing + laser heat dissipation + the
     * overheat hysteresis (locked from overheatAt down to resumeAt). */
    private cupolaTick;
    /** The synced view ray (skill-shot model): the reticle's compass bearing is
     * the hull's bearing + cupolaYaw, and dir(B) = (sin B, -cos B) — the shared
     * compass convention (0° = north/-y, clockwise; world +y is down). */
    private cupolaRay;
    /** SKILL-SHOT ray resolution: the FIRST thing crossing the synced view ray
     * wins the shot. A candidate is crossing when its along-ray distance t sits
     * in (0, range] and its perpendicular miss distance sits inside its
     * silhouette + balance.cupola.beamCorridorU. Candidates are live ENEMY
     * contacts, MINES, SMALL debris (ASTEROID at radius ≤ debrisStorm.
     * smallRadiusMax — the shared "shootable" predicate; the non-enemy classes
     * get cupolaCorridorBonus of extra corridor because pebbles are hard), and
     * (gatling only) hostile inbound MISSILES/ROCKETS at pdRoundRadiusU wide —
     * nearest along the ray wins between a contact and a projectile. BIG
     * asteroids stay ignored entirely (weather, not blockers), and torpedoes/
     * rails/decoys are simply never candidates: the owner's counter rule,
     * enforced by candidacy instead of a reject string. */
    private cupolaResolveRay;
    /** One trigger pull on the cupola battery — the PURE SKILL SHOT (owner:
     * "allow the cupola gunner to fire at anytime in any direction if they have
     * a weapon armed"). CUPOLA duty/phase gating happened in applyIntent; this
     * validates the MOUNT state only (manned, powered, fed, cool) and resolves
     * the shot ALONG THE SYNCED VIEW RAY (heading + cupolaYaw — the center
     * reticle setCupolaAim streams). The old ±10° reticle gate, the turn-grace
     * heading ring, and every target-required/range/kind rejection are GONE:
     * the direction IS the aim, and a miss costs the heat/ammo it burned.
     * targetId/projectileId stay on the wire for compat but are ACCEPTED AND
     * IGNORED — the server never resolves a shot against a client-named thing.
     * Returns a reject reason (client-only, spam-safe) or null.
     * POWER RULING (the turret precedent): laser + gatling are POWERED mounts on
     * the WEAPONS bus — a forced lockout darkens them, and a starved bus
     * stretches their cycle (cupolaCycle). The ROCKET pod is MECHANICAL (the
     * tubes/rail exemption, documented on balance.outages): it fires through a
     * WEAPONS lockout at its fixed one-at-a-time pace. */
    cupolaFire(weapon: "laser" | "gatling" | "rocket", _targetId?: string, _projectileId?: string): string | null;
    /** Heat bookkeeping for a battery pull: both barrels feed ONE gauge
     * (ship.cupolaHeat), but only the LASER is locked out by the overheat latch —
     * the gatling's trickle (heatPerBurst 2 vs 22/s cooling) can only tip an
     * already-blazing gauge over the line. */
    private cupolaHeatUp;
    private spendGatling;
    /** Connected Cannoneer (GUNNER) seats, in stable A→D order (cannoneer wave).
     * The count sizes the phaser bank at launch (initCombat); the ordered list
     * drives phaser delegation (refreshGunnerAssignments). */
    private connectedCannoneerSeats;
    /** Delegate phaser banks to connected cannoneers and revert the rest to
     * Tactical (cannoneer wave). The first connected cannoneer (A) takes the LAST
     * bank, the next takes the one before it, so Tactical keeps the front banks;
     * a cannoneer whose seat drops hands their bank straight back to Tactical.
     * Called every tick — cheap (≤4 banks) and only writes on a real change, so
     * connect/drop/seat-swap all re-delegate without a dedicated hook. */
    private refreshGunnerAssignments;
    /** Engineer rotates one conduit tile 90° CW (rerouteRotate intent; role/phase
     * gated upstream in applyIntent). Validates the board is live, the index is
     * on the grid, and the tile isn't broken — then rotates and recomputes the
     * flow. Returns a reject reason (client-only, spam-safe) or null. */
    rerouteRotate(index: number): string | null;
    private outageTick;
    /** Draw the outage target from OUTAGE_TARGETS (WEAPONS/JUMP_DRIVE/SHIELDS/
     * SENSORS — never LIFE_SUPPORT or ENGINES, see the constant's comment). A
     * dead system is already offline — no drama in scramming it again. */
    private pickOutageTarget;
    /** Land a forced outage: flag + hold the system down, log the source fiction
     * (picked by context — owner spec: hacking enemies, anomalies gone wrong,
     * powerful cosmic phenomena), and open the REROUTE board immediately so the
     * engineer's conditional button launches onto a live grid. `intruder` names
     * a specific hacker (the collector boss's HARVEST PROTOCOL cycle) instead of
     * the contextual pick — same lockout either way, fiction only. */
    private triggerOutage;
    /** Port of the prototype's gen() (engineering_repair_prototype.html ~543):
     * carve a guaranteed SRC→sink path (east to a random bend column, vertical to
     * sinkRow, east to the last column), decorate off-path cells from the
     * prototype's shape set, break ~brokenChance of them, then scramble every
     * rotatable tile 0–3 turns. The dev/test forceOutageEasy knob skips the
     * scramble — the carved path is intact, so the board is connected at birth.
     * Grid size comes from balance (fixed 5×4) instead of the prototype's
     * canvas-aspect pick — the phone panel letterboxes it either way. */
    private genReroute;
    /** The client's computeFlow() (terminal RerouteGame.tsx) reimplemented — the
     * server can't import from the terminal package, so the BFS is duplicated
     * with IDENTICAL semantics: power enters (0,srcRow) through its W opening,
     * spreads through matching OPPOSITE openings, and the route is live when
     * (cols-1,sinkRow) is powered AND opens E toward the system tap. */
    private rerouteConnected;
    /** Restore at progress 100: the lockout lifts, health UNTOUCHED (outages lock,
     * they don't damage — repairs stay a separate economy), board closed. */
    private completeReroute;
    /** Close the reroute board (restore, expiry, or any reset seam). Grid fields
     * are left stale behind active=false — dead data the client never reads. */
    private clearReroute;
    /** Drop any live forced outage + its reroute board (expiry, jump arrival,
     * mission start, lobby return, GAMEOVER). Health untouched; `online` recovers
     * to the plain health rule. Returns whether there was anything to clear —
     * callers own the log beat (arrival wants "resets in transit", expiry wants
     * "decays", resets want silence). */
    private clearOutage;
    /** FIRST_CONTACT containment (shared by every hot-spawn path): while the
     * Vel'Shaar envoy sits DORMANT, a surprise hostile wave's no-IFF torpedoes
     * would home on the loudest signature — the envoy — whose attribution-blind
     * damage sniffing blames the crew and voids the peaceful endings. When
     * contained, log the beat and spawn nothing. */
    private hostileSpawnContained;
    /** Science acts on a survey point (design update: SENSOR SCAN showcase).
     * Seat/phase gating happened in applyIntent; the rest validates here IN
     * ORDER: contact exists → poi exists → action matches the kind → surveyed →
     * not spent → within action range → probe stock (spend). Then the poi is
     * marked spent (one-shot) and the outcome rolls SERVER-PRIVATELY — per kind,
     * with per-anomaly overrides (the SLEEPER SEAM vault core). */
    applyPoiAction(contactId: string, poiId: string, action: string): string | null;
    private applyPoiOutcome;
    private poiEffectsTick;
    private armNextCall;
    private clearJam;
    private jamTick;
    private tryStartCall;
    private resolveCall;
    private payBossBounty;
    departContact(id: string): void;
    /** The current plan's completion reward (hail director: bluff payouts). */
    encounterReward(): number;
    private buildGalaxy;
    private rollNeighborSignals;
    private pickWormholeExit;
    engageJump(): void;
    private probeThemeOf;
    private launchProbeMission;
    /** Streaming steer (validated + clamped in applyIntent). */
    probeSteer(throttle: number, headingRad: number): void;
    /** Probe hold: the pilot is gone (left, lost the page, dropped), so the Probe stops. Throttle goes to 0 and
     * the ordered heading is left alone, so the Probe doesn't slew; the creature still hunts. There is no
     * piloting client, only the Science Duty, so this is asked of the Seat the leaver held. */
    holdProbe(): void;
    /** Nearest interactable within reach: cache/prize/terminal/exit pad. */
    probeInteract(): string | null;
    probeAbort(): string | null;
    /** The manual radar burst: charts the bones map-wide, and it is LOUD. */
    probePing(): string | null;
    private rewriteProbeTile;
    private emitProbeEcho;
    /** Has the sweep line crossed `target` between the last tick and now? */
    private sweepCrossed;
    private probeTick;
    private probePoiRefs;
    private resolveProbeExtracted;
    private resolveProbeLost;
    private clearProbe;
    private arriveInSector;
    /**
     * Draw a plan of a SPECIFIC type by rejection sampling the real generator, so
     * the plan is authentic (real pack sizes, classes and rewards) rather than
     * hand-built. Shared by the force knobs and the demo table.
     *
     * The sector shim matches what the knob path has always done: HUNTER only ever
     * comes out of a sector divisible by hunterEvery, and sector 1 only ever yields
     * SURVEY, so any other type has to be drawn at sector >= 2. For the demo that
     * means sector 4's finale is generated (and rewarded) as a sector-5 hunter —
     * 130 salvage rather than 122, same escort count. A comment beats a special
     * case for an eight-point difference.
     *
     * Rarest type in play is DERELICT at ~4% per draw, so 500 tries misses with
     * probability ~1e-9. Returns null rather than looping forever.
     */
    private drawTyped;
    private drawEncounter;
    private maybeEvacuation;
    /** Build the EVACUATION plan (room-made — never in genEncounter's table):
     * a colony convoy spooling to jump, raiders inbound from the far band. The
     * convoy itself spawns in applyEncounter (spawnEvacConvoy). */
    private evacuationPlan;
    private applyFrontFlavor;
    private maybeSwarmFlavor;
    /** The LAUNCH gate: null when the connected crew may launch, else the reject
     * reason. A launch needs every REQUIRED seat of the hull held by a connected
     * player (missingRequiredSeats — optional cannoneer/cupola seats never count),
     * so a ship nobody can fly never leaves the lobby. `minHeld` lowers the bar
     * for a grandfathered save (see continueRun). The shortCrewLaunch test knob
     * restores the old "any one seat" rule for drivers that fly a partial crew. */
    launchBlockReason(minHeld?: number, force?: boolean): string | null;
    private seatBlockReason;
    startGame(): void;
    restartGame(): void;
    private beginBoot;
    /** bootSkip intent: officers mark ready; the host ends it for the room. */
    bootSkip(sessionId: string): void;
    private finishBoot;
    /** Roll + stamp a signal voice on a fresh ANOMALY/DERELICT contact. */
    private assignSignalVoice;
    /** Signal family id of a contact (keys SIGNAL_LABELS / SIGNAL_TUNE_KEYS). */
    private signalFamilyFor;
    /** Family label for the comms bank + the TV header (never the entity name) — a wire ref. */
    signalLabelFor(c: Contact): TextStr;
    playSignal(contactId: string): string | null;
    stopSignal(): void;
    private clearSignal;
    private startMission;
    private applyForceQuest;
    private applyEncounter;
    private spawnPlanEnemies;
    private spawnHotEnemies;
    private spawnSentinelShowdown;
    private sentinelShowdownTick;
    /** Is the front live? Armed by the archive chain (campaign stage 3), by
     * depth regardless (autoSector — the front exists whether or not the crew
     * reads the record; documented ruling), or by any pressure already on the
     * dial (a knob-seeded or restored run). */
    private frontLive;
    /** Raise the front (it NEVER recedes — hardcore), logging each band beat
     * exactly once as the dial crosses it (UNMAKING_BANDS, discovery voice). */
    private advanceFront;
    private frontTick;
    /** Corrupt a freshly-spawned hull into a HUSK variant (front ≥25): the
     * EXISTING class with its label prefixed and hull × huskHullMul — the
     * elite-mul precedent applied post-spawn. Shield/damage untouched: the
     * wrongness is in the meat, not the guns. */
    /** A machine-corrupted hull: no captain answers, so the parley/surrender
     * script is suppressed (hails.ts) even though it keeps its pirate classId. */
    isHusk(id: string): boolean;
    private huskify;
    /** Front ≥ primeAt: a corrupted swarm nexus rides ordinary combat packs —
     * the SENTINEL PRIME machinery (elite muls), husked. */
    private spawnHuskPrime;
    /** EVACUATION fire routing: does this raider turn its guns on the convoy this
     * shot? Rolls evacRaiderFocus, then returns the nearest LIVING transport
     * inside weapon range (else null → the raider fires on the ship). This is the
     * convoy's fail state — a passive crew watches colonies burn. */
    private evacRaiderTarget;
    /** Materialize the colony convoy: 2–3 FRIENDLY transports on public berth
     * clocks (Contact.jumpCharge 0→100 — the FLEE-spool channel every console
     * already renders). Their deaths are mourned by resolveDeaths like any
     * friendly; their jumps are counted here. */
    private spawnEvacConvoy;
    private evacTick;
    /** Move a faction on the synced ledger (−100..100, clamped). Comms keeps
     * the book; an optional beat says why. Public: the hail director applies
     * most of the deltas. */
    adjustRep(faction: string, delta: number, beat?: TextStr): void;
    /** Dev/test-only (startRep knob): seed the ledger at launch —
     * "corsairs:30,guild:5". Unknown factions are accepted (harmless keys). */
    private applyStartRep;
    /** Push a short-lived intercept row. Ids are monotonic for the room's
     * lifetime (never recycled — the synced-log rule); the live-row cap drops
     * the oldest ear-worm first. */
    pushIntercept(text: TextStr, source: string, ttl?: 24): void;
    /** The caller tryStartCall WOULD pick right now (farthest eligible hostile)
     * — the intent leak names the ship that is actually winding up to dial. */
    private pickLikelyCaller;
    private sigintTick;
    private rollBossSpawn;
    private spawnBoss;
    private bestiaryTick;
    private skittishTick;
    private hazardTick;
    abandonRun(): void;
    returnToLobby(): void;
    persistMeta(): void;
    private saveRunSnapshot;
    private deleteRunSnapshot;
    /** The Mods that are on changed (RoomPacks): which saved ships can be flown changed with them. */
    modsChanged(): void;
    /**
     * The game's tables changed (RoomPacks, after the process applied new Room Content): a hull a Mod added may be gone with its
     * Mod. A crew that picked it flies the default hull instead, with seats cleared (the setShipClass rule), because otherwise the
     * run would fly as a cruiser and its save would name a hull that cannot be loaded. The saved ships are read again, as the
     * hulls and crew counts in them were read against the old tables.
     */
    contentApplied(): void;
    /** Refresh the lobby's SAVED SHIPS advertisement from disk (room create,
     * host join, every checkpoint / delete / continue). The legacy single-save
     * badge trio stays honest too — it now mirrors the most recent slot. */
    private refreshSavedShips;
    /** Resume a saved run (continueRun intent — HOST + LOBBY gated upstream).
     * MULTI-SLOT: `shipName` picks the slot; omitted = the most recent save
     * (listRuns is savedAt-sorted). Two-step when the saved hull ≠ the lobby
     * hull (design ruling: the save's class WINS): the first call restores the
     * class — which clears seats, existing setShipClass behavior — and stays in
     * the lobby so the crew re-claims stations on the restored hull; the next
     * call (classes match, a seat claimed, like startGame) launches. Returns a
     * reject reason or null. */
    continueRun(shipName?: string, force?: boolean): string | null;
    private resumeMission;
    private applyLifeSupport;
    private applyRadiation;
    onJoin(client: Client, options: {
        kind?: string;
        name?: string;
        host?: boolean;
        remote?: boolean;
        profileId?: string;
        hostKey?: string;
    }): void;
    onLeave(client: Client, consented?: boolean): Promise<void>;
    onDispose(): void;
}
export {};
