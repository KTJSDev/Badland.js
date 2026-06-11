export class LogicLiveGlobalManager {
    static globalConfigurations = [
        '', 
        '{"ID":"CLAN_CHEST","Params":{"StartTime":"20180613T000000.000Z","ActiveDuration":"P3dT11h45m","InactiveDuration":"P0dT0h15m","ChestType":["0"]}}',
        '',
        '{"ID":"CREATOR_CODES","Params":{"Active":true,"CodeExpiration":604800,"CampaignExpiration":2592000,"Creators":[{"CampaignCode":"BFA","CreatorCode":"BFA","CreatorName":"BFA"},{"CampaignCode":"KTJS","CreatorCode":"KTJS","CreatorName":"KTJS"},{"CampaignCode":"CaptainTalib","CreatorCode":"CaptainTalib","CreatorName":"CaptainTalib"},{"CampaignCode":"CumpiGamer","CreatorCode":"CumpiGamer","CreatorName":"CumpiGamer"},{"CampaignCode":"DocJazy","CreatorCode":"DocJazy","CreatorName":"DocJazy"},{"CampaignCode":"Fercho502","CreatorCode":"Fercho502","CreatorName":"Fercho502"},{"CampaignCode":"Grapie","CreatorCode":"Grapie","CreatorName":"Grapie"},{"CampaignCode":"Kevini44","CreatorCode":"Kevini44","CreatorName":"Kevini44"},{"CampaignCode":"kojimakamo","CreatorCode":"kojimakamo","CreatorName":"kojimakamo"},{"CampaignCode":"KzRR","CreatorCode":"KzRR","CreatorName":"KzRR"},{"CampaignCode":"Leopold","CreatorCode":"Leopold","CreatorName":"Leopold"},{"CampaignCode":"Malcaide","CreatorCode":"Malcaide","CreatorName":"Malcaide"},{"CampaignCode":"Moran1001","CreatorCode":"Moran1001","CreatorName":"Moran1001"},{"CampaignCode":"Nery","CreatorCode":"Nery","CreatorName":"Nery"},{"CampaignCode":"Sooraj","CreatorCode":"Sooraj","CreatorName":"Sooraj"},{"CampaignCode":"Viola","CreatorCode":"Viola","CreatorName":"Viola"},{"CampaignCode":"Raevococ","CreatorCode":"Raevococ","CreatorName":"Raevococ"},{"CampaignCode":"kmanus","CreatorCode":"kmanus","CreatorName":"kmanus"},{"CampaignCode":"GDT","CreatorCode":"GDT","CreatorName":"GDT"},{"CampaignCode":"Seinhor9","CreatorCode":"Seinhor9","CreatorName":"Seinhor9"},{"CampaignCode":"JMJDP","CreatorCode":"JMJDP","CreatorName":"JMJDP"},{"CampaignCode":"Huntah","CreatorCode":"Huntah","CreatorName":"Huntah"},{"CampaignCode":"StefanTV","CreatorCode":"StefanTV","CreatorName":"StefanTV"},{"CampaignCode":"Withzy","CreatorCode":"WithZack","CreatorName":"WithZack"},{"CampaignCode":"Stopde","CreatorCode":"Stopde","CreatorName":"Stopde"},{"CampaignCode":"Gamespain","CreatorCode":"Gamespain","CreatorName":"Gamespain"},{"CampaignCode":"AlexTM","CreatorCode":"AlexTM","CreatorName":"AlexTM"},{"CampaignCode":"Rhovaxx","CreatorCode":"Rhovaxx","CreatorName":"Rhovaxx"},{"CampaignCode":"HolyClony","CreatorCode":"HolyClony","CreatorName":"HolyClony"},{"CampaignCode":"Snipux","CreatorCode":"Tervaleijona","CreatorName":"Tervaleijona"},{"CampaignCode":"CarsonJay","CreatorCode":"CarsonJay","CreatorName":"CarsonJay"},{"CampaignCode":"Salamandrake","CreatorCode":"SAL","CreatorName":"Salamandrake"},{"CampaignCode":"K2K","CreatorCode":"K2K","CreatorName":"K2K"},{"CampaignCode":"gernien","CreatorCode":"Gernien","CreatorName":"Gernien"},{"CampaignCode":"NinjaX","CreatorCode":"NinjaX","CreatorName":"NinjaX"},{"CampaignCode":"RISHI","CreatorCode":"Rishi","CreatorName":"Rishi"},{"CampaignCode":"Bombed","CreatorCode":"Bombed","CreatorName":"Bombed"},{"CampaignCode":"WithBrn","CreatorCode":"WithBrn","CreatorName":"WithBrn"}]}}',
        '', ''
    ] // MUST BE 6 STRINGS
    
    static encode(stream) {
        for (let i = 0; i < 6; i++) {
            const config = LogicLiveGlobalManager.globalConfigurations[i] || ""

            if (stream.writeBoolean(config !== "")) {
                stream.writeString(config)
            }
        }
    }
}