import { type Contact, type EncounterPlan } from "@scc/shared";
import type { BridgeRoom } from "../rooms/BridgeRoom";
/** AI-state tags owned by the hail system. updateAI / enemy torpedoes / the
 * proximity escalation / hostiles-left checks all skip both. */
export declare const AI_DORMANT = "DORMANT";
export declare const AI_SURRENDERED = "SURRENDERED";
export declare class HailDirector {
    private readonly room;
    constructor(room: BridgeRoom);
    /** Contacts that were refused quarter — they fight to the death (updateAI). */
    readonly noFlee: Set<string>;
    /** FIRST_CONTACT: the envoy was provoked (completion = destroy it). */
    envoyProvoked: boolean;
    /** TRADER: the merchant sprang her trap (completion = clear the escorts). */
    qshipSprung: boolean;
    /** DISTRESS: Comms answered the mayday (completion = attackers dead). */
    distressResponded: boolean;
    /** A tribute demand was REFUSED (fired on / hung up / let expire) — clearing
     * the fight afterwards buys corsair respect (room.completeEncounter pays
     * balance.rep.refuseWin off this flag). */
    demandRefused: boolean;
    /** Dev/test-only (forceHailHold): the response window never runs out, so a seeded hail outlives a long walk. */
    holdExpiry: boolean;
    private session;
    /** Honest-trade guild rep earned this meeting (capped — no rep farming). */
    private tradeRepEarned;
    private opener;
    private envoyId;
    private envoyResolved;
    private traderId;
    private qship;
    private haggled;
    private chartsSold;
    private thanksDelay;
    private thanksPending;
    private offerRolled;
    private fakeSurrender;
    private noMoreTalk;
    /** Fresh encounter (also startMission/returnToLobby): drop every channel,
     * timer, and scenario roll. */
    reset(): void;
    /** Schedule the encounter's opener a beat after the arrival title card.
     * forceHail is dev/test-only: "demand" pins the pirate-demand roll on,
     * "none" suppresses every random opener roll. */
    configure(plan: EncounterPlan, forceHail: string): void;
    /** FIRST_CONTACT arrival registered its dormant envoy. */
    setEnvoy(contactId: string): void;
    /** TRADER arrival registered its merchant; the q-ship roll happens HERE,
     * server-private. `qship` undefined = today's roll; an explicit boolean
     * pins it (dev/test forceQship — and the guild supply line passes `false`:
     * a post-clear merchant is a reward, never a trap). */
    setTrader(contactId: string, qship?: boolean): void;
    /** A registered merchant still on the plot (the supply line must never
     * stack a second freighter on a live one). */
    traderAlive(): boolean;
    /** DISTRESS completed with the freighter alive → a thank-you hail (flavor). */
    scheduleThanks(): void;
    tick(dt: number): void;
    private tickOpener;
    private tickThanks;
    private tickSurrenderOffers;
    private tickEnvoyAggro;
    private tickSession;
    private expire;
    hailContact(c: Contact): void;
    /** Apply the picked option. False → applyIntent rejects (bad option id). */
    respond(optionId: string): boolean;
    /** Comms ends the transmission. Hanging up on a live demand is a refusal. */
    close(): void;
    private applyEffect;
    private springQship;
    /** `reason` is the log line (a ref) explaining why the envoy turned. */
    private aggroEnvoy;
    private departEnvoy;
    private departTrader;
    private departAllPirates;
    private rollFakeOnce;
    private noResponse;
    private openDemand;
    private openTaunt;
    private openMayday;
    private openEnvoyHail;
    private open;
    /** Fill GameState.hail from a node (design §9: clients only render). */
    private present;
    /** ChoiceOption.label/detail are refs; an option with no small print keeps detail "". */
    private fillOption;
    clearHail(): void;
    /** Faction standing off the synced ledger (−100..100; missing key = 0). */
    private rep;
    /** Corsair boldness (reputation wave): every point BELOW neutral scales the
     * demand — they smell weakness, so tribute paid begets bigger tributes. */
    private tribute;
    /** Trader price after a successful haggle (§9.6) — or on guild standing:
     * at rep ≥ guildDiscountAt the family rates apply unasked (the q-ship
     * apology discount, balance.rep). */
    private price;
    /** Guild honest-trade rep: +tradeHonest per purchase, capped per meeting. */
    private guildTradeRep;
    /** Only the placeholders a node/option declares go on the wire (hails.test.ts keeps the
     * declarations equal to the catalog English). */
    private params;
    private vars;
}
