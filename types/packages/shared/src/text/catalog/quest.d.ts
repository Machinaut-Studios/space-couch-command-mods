export declare const quest: {
    readonly ghost_beacon: {
        readonly name: import("..").TextEntry<"GHOST BEACON">;
        readonly stage1: {
            readonly log: import("..").TextEntry<"GHOST BEACON: jump out and find the source of the signal">;
            readonly journal: import("..").TextEntry<"GHOST BEACON: the coordinates hold. Whatever sent this is one jump away, and it is still transmitting.">;
        };
        readonly stage2: {
            readonly journal: import("..").TextEntry<"GHOST BEACON closed. The crew of the silent vessel is answered at last. Salvage claim honored (+{salvage} salvage). Her survey probe still answers diagnostics, re-slotted for our bay (+{probes} probe).">;
        };
    };
    readonly sleeper_seam: {
        readonly name: import("..").TextEntry<"SLEEPER SEAM">;
        readonly stage1: {
            readonly log: import("..").TextEntry<"SLEEPER SEAM: coordinates locked. Jump to the next sector to reveal the site">;
            readonly arrivalLog: import("..").TextEntry<"SLEEPER SEAM: site revealed. Science: survey the WORKED-STONE RETURN (Precursor vault) to 100%">;
            readonly journal: import("..").TextEntry<"SLEEPER SEAM: the coordinates chart clean, and nothing is left to decode. Whatever fits this key shows itself on the next arrival. It has been patient for a very long time. Engineering charges, Helm jumps, Science surveys the worked-stone return.">;
        };
        readonly stage2: {
            readonly log: import("..").TextEntry<"SLEEPER SEAM: select the marker offering TAP on the scan scope and press it within range, if the crew dares">;
            readonly arrivalLog: import("..").TextEntry<"SLEEPER SEAM: the vault is back. Survey the WORKED-STONE RETURN, then select the TAP marker on the scan scope and press it within range">;
            readonly journal: import("..").TextEntry<"SLEEPER SEAM: the vault is real, and warm. Science: select the marker offering TAP on the scan scope and press it within range. No probe goes out, so Comms stands by. The survey does not say what the seam took that made it need sealing like this.">;
        };
        readonly stage3: {
            readonly journal: import("..").TextEntry<"SLEEPER SEAM closed: the seam is unsealed. What it kept, it no longer keeps.">;
        };
    };
    readonly weaver_question: {
        readonly name: import("..").TextEntry<"THE WEAVER'S QUESTION">;
        readonly stage1: {
            readonly log: import("..").TextEntry<"THE WEAVER'S QUESTION: coordinates unfolded. Jump to the next sector to reveal the loom">;
            readonly arrivalLog: import("..").TextEntry<"THE WEAVER'S QUESTION: loom revealed. Science: survey the WOVEN RETURN (Weaver's loom) to 100%">;
            readonly journal: import("..").TextEntry<"THE WEAVER'S QUESTION: the coordinates unfold clean, and there is nothing more to work out. Whatever asked it shows itself on the next arrival. It has been waiting for a student worth the lesson. Engineering charges, Helm jumps, Science surveys the woven return.">;
        };
        readonly stage2: {
            readonly log: import("..").TextEntry<"THE WEAVER'S QUESTION: put our answer to the loom. Select the marker offering DECODE on the scan scope and press it within range, if the crew dares">;
            readonly arrivalLog: import("..").TextEntry<"THE WEAVER'S QUESTION: the loom is back. Survey the WOVEN RETURN, then select the DECODE marker on the scan scope and press it within range">;
            readonly journal: import("..").TextEntry<"THE WEAVER'S QUESTION: the loom is real, and running. Science: select the marker offering DECODE on the scan scope and press it within range. No probe goes out, so Comms stands by. The survey does not say what the loom does with a wrong answer.">;
        };
        readonly stage3: {
            readonly journal: import("..").TextEntry<"THE WEAVER'S QUESTION closed: asked, answered, and paid for. One way or the other.">;
        };
    };
    readonly sentinel_signal: {
        readonly name: import("..").TextEntry<"THE SENTINEL SIGNAL">;
        readonly stage1: {
            readonly log: import("..").TextEntry<"THE SENTINEL SIGNAL: find the dead relay and decode the signal it keeps">;
            readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL: the return path holds. The relay is one jump deeper in, and the chirp keeps counting, patient as winter.">;
        };
        readonly stage2: {
            readonly log: import("..").TextEntry<"THE SENTINEL SIGNAL: the handshake was heard. Jump when ready, and arrive at battle stations">;
            readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL: the relay routed our decode, and something past the charts answered it. The handshake carried our hull number. The next arrival will not be quiet.">;
        };
        readonly stage3: {
            readonly log: import("..").TextEntry<"THE SENTINEL SIGNAL: the sentinels have come. Destroy the swarm">;
            readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL: the answer arrives in numbers. The tally was always a targeting ledger.">;
        };
        readonly stage4: {
            readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL closed: the swarm is scrap and the old count is broken. Salvage rights on machine-wreck this ancient pay in full (+{salvage} salvage). One carcass cradled an intact survey probe (+{probes} probe).">;
        };
    };
    readonly the_void: {
        readonly orders: import("..").TextEntry<"◉ PRIORITY ONE, FLEET COMMAND: long-range sensors are tracking a moving VOID on a direct heading for the inner colonies. It returns no mass, no light and no signal. Intercept it, find its origin, assess the threat and report back.">;
        readonly name: import("..").TextEntry<"THE VOID">;
        readonly stage1: {
            readonly log: import("..").TextEntry<"THE VOID: close with the structure and put a full survey on its hull">;
            readonly journal: import("..").TextEntry<"THE VOID: Fleet Command's anomaly has a hull. It is a ship beyond registry scale, cloaked, holding course for the inner colonies... and around our survey wake, old machines are stirring. Whatever it is, it is guarded.">;
        };
        readonly stage2: {
            readonly log: import("..").TextEntry<"THE VOID: the record is cut short. Find the relay trailing in her wake">;
            readonly journal: import("..").TextEntry<"ARCHIVE FRAGMENT recovered. The woven record decodes in pieces: a people called the OSSARI, oceans of them asleep in crystal, and a homeland UNMADE behind them, its matter taken apart and repurposed by something that does not stop. The record breaks off mid-entry.">;
        };
        readonly stage3: {
            readonly journal: import("..").TextEntry<"ARCHIVE FRAGMENT recovered: the record's tail. It ends mid-sentence, and the last completed line is a bearing: the wake they fled. We plotted it. The wake it fled is IN OUR SKY, behind us, between home and here.">;
        };
        readonly podLore: {
            readonly attempt1: import("..").TextEntry<"The tap seats clean, and the pod refuses it: stabilized, the lattice re-weaving around our interface faster than it can bite. The pulse inside slows, settles... deeper.">;
            readonly attempt2: import("..").TextEntry<"Second attempt. The lattice reads our tap this time and answers with a pattern. The linguistics package flags one form at low confidence: 'not yet'. The pod's pulse holds. Ours skipped.">;
            readonly attempt3: import("..").TextEntry<"Final attempt. The interface glasses over the moment it touches. The pod seals itself with our tool inside the weld, gently, the way you close a door on a sleeping child. The survey marks it: stabilized. Whatever wakes them, it is not us. Perhaps nothing should.">;
        };
        readonly unmaking: {
            readonly band25: import("..").TextEntry<"Long-range plots astern are going quiet. The stars are still there; everything that used to fly between them is gone. And some of what still flies... reads wrong.">;
            readonly band50: import("..").TextEntry<"The raider bands astern have changed dialect: more traffic, shorter calls, and every one of them answered. Something back there is very organized now, and it is closer than it was.">;
            readonly band75: import("..").TextEntry<"Spectrograph, rear arc: the starlight itself is losing lines. Whole frequencies are simply not arriving anymore. The record used one word for this. We stopped translating it aloud.">;
            readonly band100: import("..").TextEntry<"The rear plot ends at an edge: a moving boundary past which our instruments return the same nothing the Void once did. It is in this sky. Run, warn the colonies, and do not stop.">;
        };
    };
} & import("../types").TextGroup;
