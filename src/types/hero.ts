export interface Hero {
    id: number;
    name: string;
    class: HeroClass;
    armor: ArmorType;
    weapon: WeaponType;
    level?: number;
}

export type HeroClass = 'Warrior' | 'Mage' | 'Ranger' | 'Thief';

export type ArmorType = 'Mail' | 'Plate' | 'Leather' | 'Cloth';

export type WeaponType = 'Mace' | 'Staff' | 'Bow' | 'Dagger';



