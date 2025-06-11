// unlockedWeapons.js

// This file assumes you have a weapons.js with weaponKits array
// It exports all weapon IDs as unlocked by default

import { weaponKits } from './weapons.js';

export const unlockedWeapons = weaponKits.map(weapon => weapon.id);
