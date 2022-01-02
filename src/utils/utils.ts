export interface VectorInterface {
    x: number;
    y: number;
    z: number
}

export const Delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function GetVectorDistance(vec1: VectorInterface, vec2: VectorInterface): number{
    let dx: number = vec1.x - vec2.x;
    let dy: number = vec1.y - vec2.y;
    let dz: number = vec1.z - vec2.z;

    return Math.sqrt((Math.pow(dx, 2)) + (Math.pow(dy, 2)) + (Math.pow(dz, 2)));
}

const Player: number = GetPlayerPed(-1);
export function GetPlayerVector(): VectorInterface{
    let playerCoords = GetEntityCoords(Player);

    return {
        x: playerCoords[0],
        y: playerCoords[1],
        z: playerCoords[2]
    }
}
