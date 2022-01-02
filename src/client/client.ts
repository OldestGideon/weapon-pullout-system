import {Delay, LoadAnimationDictionary} from "../utils/utils";

const WeaponList: Array<string> = ["WEAPON_PISTOL","WEAPON_COMBATPISTOL","WEAPON_STUNGUN","WEAPON_NIGHTSTICK","WEAPON_FLASHLIGHT","WEAPON_FIREEXTINGUISHER","WEAPON_FLARE","WEAPON_SNSPISTOl","WEAPON_MACHINEPISTOL","WEAPON_FLARE","WEAPON_FLARE","WEAPON_FLARE","WEAPON_KNIFE","WEAPON_KNUCKLE","WEAPON_NIGHTSTICK","WEAPON_HAMMER","WEAPON_BAT","WEAPON_GOLFCLUB","WEAPON_CROWBAR","WEAPON_BOTTLE","WEAPON_DAGGER","WEAPON_HATCHET","WEAPON_MACHETE","WEAPON_SWITCHBLADE","WEAPON_PROXMINE","WEAPON_BZGAS","WEAPON_SMOKEGRENADE","WEAPON_MOLOTOV","WEAPON_MACHINEPISTOL"];
let IsHolstered: boolean = true;

console.log('Loaded');

const CheckPedWeapon = (): boolean => {
    let Ped = GetPlayerPed(-1);
    let PedWeapon = GetSelectedPedWeapon(Ped);
    let result: boolean = false;

    WeaponList.forEach(weapon => {
        if(GetHashKey(weapon) === PedWeapon){
            console.log('CheckPedWeapon: ', true);
            result = true;
        }
    });
    return result;
}

setTick(async () => {
    const Ped = PlayerPedId();
    await Delay(1000);
    if(DoesEntityExist(Ped) && !IsPedInAnyVehicle(Ped, true)){


        await LoadAnimationDictionary('reaction@intimidation@1h');
        await LoadAnimationDictionary('weapons@pistol_1h@gang');

        let PedHasNormalWeapon = CheckPedWeapon();

        if(PedHasNormalWeapon){

            console.log('Ped has Weapon');

            if(IsHolstered){
                console.log('Pull Out Weapon');
                TaskPlayAnim(Ped, 'reaction@intimidation@1h', 'intro', 8, 8, -1, 48, 0, false, false, false);
                DisablePlayerFiring(Ped, true);

                await Delay(2500);

                DisablePlayerFiring(Ped, false);
                ClearPedTasks(Ped);
                IsHolstered = false;
            }
        } else {
            console.log('PedHasNormalWeapon: ', PedHasNormalWeapon);
        }

        if(!CheckPedWeapon()){
            if(IsPedArmed(Ped, 4)){
                return IsHolstered = true;
            }

            if(!IsHolstered){
                console.log('Pull In Weapon');
                TaskPlayAnim(Ped, 'reaction@intimidation@1h', 'outro', 8, 8, -1, 48, 0, false, false, false);
                DisablePlayerFiring(Ped, true);

                await Delay(1500);

                DisablePlayerFiring(Ped, false);
                ClearPedTasks(Ped);
                IsHolstered = true;
            }
        }
    }


});
