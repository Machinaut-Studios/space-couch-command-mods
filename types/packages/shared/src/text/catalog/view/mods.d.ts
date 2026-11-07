export declare const mods: {
    readonly title: import("../..").TextEntry<"MODS">;
    readonly language: import("../..").TextEntry<"LANGUAGE">;
    readonly languageRow: import("../..").TextEntry<"LANGUAGE ▸ {value}">;
    readonly desc: {
        readonly language: import("../..").TextEntry<"CHOOSE THE GAME'S LANGUAGE">;
        readonly mods: import("../..").TextEntry<"INSTALLED MODS, LANGUAGE PACKS AND THE MODS FOLDER">;
    } & import("../../types").TextGroup;
    readonly close: {
        readonly touch: import("../..").TextEntry<"TAP A MOD TO SWITCH IT — TAP OUTSIDE TO CLOSE">;
        readonly keyboard: import("../..").TextEntry<"UP / DOWN — ENTER ON / OFF — LEFT / RIGHT MOVES — ESC CLOSES">;
    } & import("../../types").TextGroup;
    readonly english: import("../..").TextEntry<"English">;
    readonly refresh: import("../..").TextEntry<"REFRESH">;
    readonly exportTemplate: import("../..").TextEntry<"EXPORT ENGLISH TEMPLATE">;
    readonly openFolder: import("../..").TextEntry<"OPEN MODS FOLDER">;
    readonly empty: import("../..").TextEntry<"No Mods or Language Packs installed.">;
    readonly noFolder: import("../..").TextEntry<"This device has no mods folder.">;
    readonly loading: import("../..").TextEntry<"LOADING LANGUAGE…">;
    readonly exported: import("../..").TextEntry<"Template written to {path}">;
    readonly exportFailed: import("../..").TextEntry<"Could not write the template">;
    readonly lobbyOnly: import("../..").TextEntry<"LANGUAGE CHANGES IN THE LOBBY">;
    readonly publish: {
        readonly action: import("../..").TextEntry<"PUBLISH TO WORKSHOP">;
        readonly heading: import("../..").TextEntry<"PUBLISH WHICH MOD?">;
        readonly empty: import("../..").TextEntry<"No Mods in your mods folder can be published.">;
        readonly back: import("../..").TextEntry<"◂ BACK">;
        readonly closeKeyboard: import("../..").TextEntry<"UP / DOWN — ENTER PUBLISHES — ESC GOES BACK">;
        readonly closeTouch: import("../..").TextEntry<"TAP A MOD TO PUBLISH IT — TAP BACK TO RETURN">;
        readonly progress: {
            readonly preparing: import("../..").TextEntry<"Preparing {name}…">;
            readonly uploading: import("../..").TextEntry<"Uploading {name}… {percent}%">;
            readonly preview: import("../..").TextEntry<"Uploading the preview image…">;
            readonly committing: import("../..").TextEntry<"Finishing the upload…">;
        } & import("../../types").TextGroup;
        readonly done: import("../..").TextEntry<"Published {name}. Steam opened its Workshop page: set who can see it there.">;
        readonly agreement: import("../..").TextEntry<"Uploaded {name}, but Steam needs you to accept the Workshop agreement. Its Workshop page is open.">;
        readonly savedFailed: import("../..").TextEntry<"Uploaded {name}, but the record of it could not be saved, so a later PUBLISH may make it private again. Its Workshop page is open.">;
        readonly failed: {
            readonly notHere: import("../..").TextEntry<"Publishing needs the desktop app, as the host, with Steam running.">;
            readonly busy: import("../..").TextEntry<"Another upload is still running.">;
            readonly notFound: import("../..").TextEntry<"That Mod is not in your mods folder, or it cannot be used.">;
            readonly previewMissing: import("../..").TextEntry<"Add a preview.png or preview.jpg to the Mod's folder first.">;
            readonly previewInvalid: import("../..").TextEntry<"The preview image must be a plain preview.png or preview.jpg under 1 MB.">;
            readonly badTitle: import("../..").TextEntry<"The Mod's name is too long or has odd characters for a Workshop title.">;
            readonly badItemId: import("../..").TextEntry<"mods-published.json has a bad Workshop id for {id}.">;
            readonly ledger: import("../..").TextEntry<"Could not read mods-published.json in the app's data folder.">;
            readonly staging: import("../..").TextEntry<"Could not copy the Mod's files to upload them.">;
            readonly steam: import("../..").TextEntry<"Steam refused the upload: {why}">;
            readonly timeout: import("../..").TextEntry<"Steam did not answer in time. Try again later.">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly section: {
        readonly mods: import("../..").TextEntry<"MODS IN LOAD ORDER">;
        readonly packs: import("../..").TextEntry<"LANGUAGE PACKS">;
    } & import("../../types").TextGroup;
    readonly row: {
        readonly coverage: import("../..").TextEntry<"{percent}% TRANSLATED">;
        readonly version: import("../..").TextEntry<"v{version}">;
        readonly author: import("../..").TextEntry<"by {author}">;
        readonly clean: import("../..").TextEntry<"NO PROBLEMS">;
        readonly problems: import("../..").TextEntry<{
            readonly one: "{count} PROBLEM";
            readonly other: "{count} PROBLEMS";
        }>;
        readonly unusable: import("../..").TextEntry<"CANNOT BE USED">;
        readonly more: import("../..").TextEntry<"+{count} MORE">;
        readonly on: import("../..").TextEntry<"ON">;
        readonly off: import("../..").TextEntry<"OFF">;
        readonly earlier: import("../..").TextEntry<"◂ EARLIER">;
        readonly later: import("../..").TextEntry<"LATER ▸">;
        readonly workshop: import("../..").TextEntry<"WORKSHOP">;
        readonly downloading: import("../..").TextEntry<"DOWNLOADING">;
        readonly code: import("../..").TextEntry<"CODE">;
        readonly needsApproval: import("../..").TextEntry<"NEEDS APPROVAL">;
    } & import("../../types").TextGroup;
    readonly approve: {
        readonly title: import("../..").TextEntry<"APPROVE THIS MOD?">;
        readonly who: import("../..").TextEntry<"{name} by {author}">;
        readonly whoAnonymous: import("../..").TextEntry<"{name} (no author given)">;
        readonly idSource: import("../..").TextEntry<"Id: {id} · from {source}">;
        readonly sourceFolder: import("../..").TextEntry<"your mods folder">;
        readonly sourceWorkshop: import("../..").TextEntry<"Steam Workshop">;
        readonly warning: import("../..").TextEntry<"This Mod runs code with full access to this computer. It can read or change your files, and the game cannot check what it does.">;
        readonly advice: import("../..").TextEntry<"Only approve a Mod from someone you trust. If a Steam Workshop update changes its code, you will be asked again.">;
        readonly changed: import("../..").TextEntry<"Its code has changed since you last approved it.">;
        readonly cancel: import("../..").TextEntry<"CANCEL">;
        readonly approve: import("../..").TextEntry<"APPROVE AND TURN ON">;
        readonly closeKeyboard: import("../..").TextEntry<"UP / DOWN — ENTER CHOOSES — ESC CANCELS">;
        readonly closeTouch: import("../..").TextEntry<"TAP CANCEL OR APPROVE">;
        readonly notHere: import("../..").TextEntry<"Mods that run code can only be approved in the desktop app. See MODDING.md for how to approve one by hand.">;
        readonly done: import("../..").TextEntry<"Approved. The Mod is on.">;
        readonly failed: import("../..").TextEntry<"Could not approve it. Press REFRESH and try again.">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
