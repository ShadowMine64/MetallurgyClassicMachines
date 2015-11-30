var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var metallurgyCM = {};
var chestName;
var display=new android.util.DisplayMetrics();
com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
var Inventory={};var BetterStorage={};var GUI={};var storageBlocks={};var invID=null;
Inventory.defineBlock=function(id,name,texture,materialSourceId,opaque,rendertype,size){DefineInventory(id,name,texture,materialSourceId,opaque,rendertype,size);}
Inventory.setItem=function(id,texture,type,name,stacksize,size){SetInventory(id,texture,type,name,stacksize,size);}
//LEAVE EVERYTHING ABOVE THIS LINE
/*
Inventory.defineBlock(23,"Storage Block","log",17,false,0,15);	//Define block inventory like this (normal Block.defineBlock but with an extra argument - number of slots)

Inventory.setItem(600,"leather",0,"backpackBrown",1,3);	//Define item inventory like this (normal ModPE.setItem but with an extra argument - number of slots)
ModPE.langEdit("item.backpackBrown.name","Backpack");
*/
//		SOME NEW FUNCTIONS THAT YOU CAN USE
//
//		BetterStorage.getInventorySlot(x,y,z,slot)                SAME AS     Level.getChestSlot(x,y,z,slot)
//		BetterStorage.getInventorySlotData(x,y,z,slot)            SAME AS     Level.getChestSlot(x,y,z,slot)
//		BetterStorage.getInventorySlotCount(x,y,z,slot)           SAME AS     Level.getChestSlot(x,y,z,slot)
//		BetterStorage.setInventorySlot(x,y,z,slot,id,dmg,amount)  SAME AS     Level.setChestSlot(x,y,z,slot,id,dmg,amount)
//
//
//

ModPE.saveWorldFile = function(filename, content) {
	try {
		java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/").mkdirs();
		var newFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/", filename);
		newFile.createNewFile();
		var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
		outWrite.append(content);
		outWrite.close();
	} catch (err) {
		print(err);
	}
};

ModPE.loadWorldFile = function(filename) {
	var content = "";
	if (java.io.File( android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename).exists()) {
		var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename),
			fos = new java.io.FileInputStream(file),
			str = new java.lang.StringBuilder(),
			ch;
		while ((ch = fos.read()) != -1) {
			str.append(java.lang.Character(ch));
		}
		content = String(str.toString());
		fos.close();
	}
	return content;
};

//Brass Chest
Inventory.defineBlock(190, "Brass Chest", [["brass_top", 0], ["brass_top", 0], ["brass_front", 0], ["brass_side", 0], ["brass_side", 0], ["brass_side", 0]], 54, false, 0, 54, true);
Block.setShape(190, 1/16, 0, 1/16, 15/16, 14/16, 15/16, 0);

//Electrum Chest
Inventory.defineBlock(191, "Electrum Chest", [["electrum_top", 0], ["electrum_top", 0], ["electrum_front", 0], ["electrum_side", 0], ["electrum_side", 0], ["electrum_side", 0]], 54, false, 0, 90, true);
Block.setShape(191, 1/16, 0, 1/16, 15/16, 14/16, 15/16, 0);

//Gold Chest
Inventory.defineBlock(192, "Gold Chest", [["gold_top", 0], ["gold_top", 0], ["gold_front", 0], ["gold_side", 0], ["gold_side", 0], ["gold_side", 0]], 54, false, 0, 81, true);
Block.setShape(192, 1/16, 0, 1/16, 15/16, 14/16, 15/16, 0);

//Platinum Chest
Inventory.defineBlock(193, "Platinum Chest", [["platinum_top", 0], ["platinum_top", 0], ["platinum_front", 0], ["platinum_side", 0], ["platinum_side", 0], ["platinum_side", 0]], 54, false, 0, 108, true);
Block.setShape(194, 1/16, 0, 1/16, 15/16, 14/16, 15/16, 0);

//silver Chest
Inventory.defineBlock(195, "silver Chest", [["silver_top", 0], ["silver_top", 0], ["silver_front", 0], ["silver_side", 0], ["silver_side", 0], ["silver_side", 0]], 54, false, 0, 72, true);
Block.setShape(195, 1/16, 0, 1/16, 15/16, 14/16, 15/16, 0);

//Crushers
Block.defineBlock(196, "mcm_crusher", [["crusher_stone_top",0], ["crusher_stone_top", 0], ["crusher_stone_front", 0], ["crusher_stone_side", 0], ["crusher_stone_side", 0], ["crusher_stone_side", 0],
	["crusher_copper_top",0], ["crusher_copper_top", 0], ["crusher_copper_front", 0], ["crusher_copper_side", 0], ["crusher_copper_side", 0], ["crusher_copper_side", 0],
	["crusher_bronze_top",0], ["crusher_bronze_top", 0], ["crusher_bronze_front", 0], ["crusher_bronze_side", 0], ["crusher_bronze_side", 0], ["crusher_bronze_side", 0],
	["crusher_iron_top",0], ["crusher_iron_top", 0], ["crusher_iron_front", 0], ["crusher_iron_side", 0], ["crusher_iron_side", 0], ["crusher_iron_side", 0],
	["crusher_steel_top",0], ["crusher_steel_top", 0], ["crusher_steel_front", 0], ["crusher_steel_side", 0], ["crusher_steel_side", 0], ["crusher_steel_side", 0]
], 4, false, 0);
Block.setDestroyTime(196, 1.2);
Block.setLightOpacity(196, .0001);

//What every machine will need :v
Block.defineBlock(245, "Machine Frame", ["machine", 0], 4, false, 0);
Block.setLightOpacity(245, .0001);

/*
Block.defineBlock(197, "mcm_abstractor", [
	["abstractor_adamantine_top", 0], ["abstractor_adamantine_bottom", 0], ["abstractor_adamantine_front", 0], ["abstractor_adamantine_side", 0], ["abstractor_adamantine_side", 0], ["abstractor_adamantine_side", 0]
	["abstractor_atlarus_top", 0], ["abstractor_atlarus_bottom", 0], ["abstractor_atlarus_front", 0], ["abstractor_atlarus_side", 0], ["abstractor_atlarus_side", 0], ["abstractor_atlarus_side", 0], 
	["abstractor_black_steel_top", 0], ["abstractor_black_steel_bottom", 0], ["abstractor_black_steel_front", 0], ["abstractor_black_steel_side", 0], ["abstractor_black_steel_side", 0], ["abstractor_black_steel_side", 0], 
	["abstractor_deep_iron_top", 0], ["abstractor_deep_iron_bottom", 0], ["abstractor_deep_iron_front", 0], ["abstractor_deep_iron_side", 0], ["abstractor_deep_iron_side", 0], ["abstractor_deep_iron_side", 0], 
	["abstractor_haderoth_top", 0], ["abstractor_haderoth_bottom", 0], ["abstractor_haderoth_front", 0], ["abstractor_haderoth_side", 0], ["abstractor_haderoth_side", 0], ["abstractor_haderoth_side", 0], 
	["abstractor_mithril_top", 0], ["abstractor_mithril_bottom", 0], ["abstractor_mithril_front", 0], ["abstractor_mithril_side", 0], ["abstractor_mithril_side", 0], ["abstractor_mithril_side", 0], 
	["abstractor_orichalcum_top", 0], ["abstractor_orichalcum_bottom", 0], ["abstractor_orichalcum_front", 0], ["abstractor_orichalcum_side", 0], ["abstractor_orichalcum_side", 0], ["abstractor_orichalcum_side", 0], 
	["abstractor_oureclase_top", 0], ["abstractor_oureclase_bottom", 0], ["abstractor_oureclase_front", 0], ["abstractor_oureclase_side", 0], ["abstractor_oureclase_side", 0], ["abstractor_oureclase_side", 0], 
	["abstractor_prometheum_top", 0], ["abstractor_prometheum_bottom", 0], ["abstractor_prometheum_front", 0], ["abstractor_prometheum_side", 0], ["abstractor_prometheum_side", 0], ["abstractor_prometheum_side", 0], 
	["abstractor_tartarite_top", 0], ["abstractor_tartarite_bottom", 0], ["abstractor_tartarite_front", 0], ["abstractor_tartarite_side", 0], ["abstractor_tartarite_side", 0], ["abstractor_tartarite_side", 0]
], 4, false, 0);
Block.defineBlock(198, "mcm_abstractor", [
	["abstractor_adamantine_top", 0], ["abstractor_adamantine_bottom", 0], ["abstractor_adamantine_front_on", 0], ["abstractor_adamantine_side", 0], ["abstractor_adamantine_side", 0], ["abstractor_adamantine_side", 0]
	["abstractor_atlarus_top", 0], ["abstractor_atlarus_bottom", 0], ["abstractor_atlarus_front_on", 0], ["abstractor_atlarus_side", 0], ["abstractor_atlarus_side", 0], ["abstractor_atlarus_side", 0], 
	["abstractor_black_steel_top", 0], ["abstractor_black_steel_bottom", 0], ["abstractor_black_steel_front_on", 0], ["abstractor_black_steel_side", 0], ["abstractor_black_steel_side", 0], ["abstractor_black_steel_side", 0], 
	["abstractor_deep_iron_top", 0], ["abstractor_deep_iron_bottom", 0], ["abstractor_deep_iron_front_on", 0], ["abstractor_deep_iron_side", 0], ["abstractor_deep_iron_side", 0], ["abstractor_deep_iron_side", 0], 
	["abstractor_haderoth_top", 0], ["abstractor_haderoth_bottom", 0], ["abstractor_haderoth_front_on", 0], ["abstractor_haderoth_side", 0], ["abstractor_haderoth_side", 0], ["abstractor_haderoth_side", 0], 
	["abstractor_mithril_top", 0], ["abstractor_mithril_bottom", 0], ["abstractor_mithril_front_on", 0], ["abstractor_mithril_side", 0], ["abstractor_mithril_side", 0], ["abstractor_mithril_side", 0], 
	["abstractor_orichalcum_top", 0], ["abstractor_orichalcum_bottom", 0], ["abstractor_orichalcum_front_on", 0], ["abstractor_orichalcum_side", 0], ["abstractor_orichalcum_side", 0], ["abstractor_orichalcum_side", 0], 
	["abstractor_oureclase_top", 0], ["abstractor_oureclase_bottom", 0], ["abstractor_oureclase_front_on", 0], ["abstractor_oureclase_side", 0], ["abstractor_oureclase_side", 0], ["abstractor_oureclase_side", 0], 
	["abstractor_prometheum_top", 0], ["abstractor_prometheum_bottom", 0], ["abstractor_prometheum_front_on", 0], ["abstractor_prometheum_side", 0], ["abstractor_prometheum_side", 0], ["abstractor_prometheum_side", 0], 
	["abstractor_tartarite_top", 0], ["abstractor_tartarite_bottom", 0], ["abstractor_tartarite_front_on", 0], ["abstractor_tartarite_side", 0], ["abstractor_tartarite_side", 0], ["abstractor_tartarite_side", 0]
], 4, false, 0);
Block.setLightOpacity(197, .00001);
Block.setLightOpacity(198, .00001);

*/
//Base Ingots
ModPE.setItem(1900, "angmallen_ingot", 0, "Angmallen Ingot");
ModPE.setItem(1901, "bronze_ingot", 0, "Bronze Ingot");
ModPE.setItem(1902, "copper_ingot", 0, "Copper Ingot");
ModPE.setItem(1903, "damascus_steel_ingot", 0, "Damascus Steel Ingot");
ModPE.setItem(1904, "hepatizon_ingot", 0, "Hepatizon Ingot");
ModPE.setItem(1905, "manganese_ingot", 0, "Manganese Ingot");
ModPE.setItem(1906, "steel_ingot", 0, "Steel Ingot");
ModPE.setItem(1907, "tin_ingot", 0, "Tin Ingot");
ModPE.setItem(1908, "adamantine_ingot", 0, "Adamantine Ingot");
ModPE.setItem(1909, "astral_silver_ingot", 0, "Astral Silver Ingot");
ModPE.setItem(1910, "atlarus_ingot", 0, "Atlarus Ingot");
ModPE.setItem(1911, "black_steel_ingot", 0, "Black Steel Ingot");
ModPE.setItem(1912, "carmot_ingot", 0, "Carmot Ingot");
ModPE.setItem(1913, "celenegil_ingot", 0, "Celenegil Ingot");
ModPE.setItem(1914, "deep_iron_ingot", 0, "Deep Iron Ingot");
ModPE.setItem(1915, "haderoth_ingot", 0, "Haderoth Ingot");
ModPE.setItem(1916, "infuscolium_ingot", 0, "Infuscolium Ingot");
ModPE.setItem(1917, "mithril_ingot", 0, "Mithril Ingot");
ModPE.setItem(1918, "oureclase_ingot", 0, "Ourecalse Ingot");
ModPE.setItem(1919, "orichalcum_ingot", 0, "Orichalcum Ingot");
ModPE.setItem(1920, "prometheum_ingot", 0, "Prometheum Ingot");
ModPE.setItem(1921, "quicksilver_ingot", 0, "Quick Silver Ingot");
ModPE.setItem(1922, "rubracium_ingot", 0, "Rubracium Ingot");
ModPE.setItem(1923, "tartarite_ingot", 0, "Tartarite Ingot");

//Precious Ingots
ModPE.setItem(1924, "brass_ingot", 0, "Brass Ingot");
ModPE.setItem(1925, "electrum_ingot", 0, "Electrum Ingot");
ModPE.setItem(1926, "platinum_ingot", 0, "Platinum Ingot");
ModPE.setItem(1927, "silver_ingot", 0, "Silver Ingot");
ModPE.setItem(1928, "zinc_ingot", 0, "Zinc Ingot");

//Utility Chunks
ModPE.setItem(1929, "bitumen", 0, "Bitumen");
ModPE.setItem(1930, "magnesium", 0, "Magnesium Ingot");
ModPE.setItem(1931, "phosphorus", 0, "Phosphorus");
ModPE.setItem(1932, "potash", 0, "Potash");
ModPE.setItem(1933, "saltpeter", 0, "Saltpeter");
ModPE.setItem(1934, "sulfur", 0, "Sulfur");


//Dusts :3
ModPE.setDust = function(id, texture, dat, name, src){
	ModPE.setItem(id, texture, dat, name, 64);
	Item.addFurnaceRecipe(src, id, dat);
	Item.addFurnaceRecipe(id, src, dat);
};

ModPE.setDust(2100, "adamantine_dust", 0, "Adamantine Dust", 1908);
ModPE.setDust(2101, "angmallen_dust", 0, "Angmallen Dust", 1900);
ModPE.setDust(2102, "astral_silver_dust", 0, "Astral Silver Dust", 1909);
ModPE.setDust(2103, "atlarus_dust", 0, "Atlarus Dust", 1910);
ModPE.setDust(2104, "black_steel_dust", 0, "Black Steel Dust", 1911);
ModPE.setDust(2105, "brass_dust", 0, "Brass Dust", 1924);
ModPE.setDust(2106, "bronze_dust", 0, "Bronze Dust", 1901);
ModPE.setDust(2107, "carmot_dust", 0, "Carmot Dust", 1912);
ModPE.setDust(2108, "celenegil_dust", 0, "Celenegil Dust", 1913);
ModPE.setDust(2109, "copper_dust", 0, "Copper Dust", 1902);
ModPE.setDust(2110, "damascus_steel_dust", 0, "Damascus Steel Dust", 1903);
ModPE.setDust(2111, "deep_iron_dust", 0, "Deep Iron Dust", 1914);
ModPE.setDust(2112, "electrum_dust", 0, "Electrum Dust", 1925);
ModPE.setDust(2113, "gold_dust", 0, "Gold Dust", 266);
ModPE.setDust(2114, "haderoth_dust", 0, "Haderoth Dust", 1915);
ModPE.setDust(2115, "hepatizon_dust", 0, "Hepatizon Dust", 1904);
ModPE.setDust(2116, "infuscolium_dust", 0, "Infuscolium Dust", 1916);
ModPE.setDust(2117, "iron_dust", 0, "Iron Dust", 264);
ModPE.setDust(2118, "manganese_dust", 0, "Manganese Dust", 1905);
ModPE.setDust(2119, "mithril_dust", 0, "Mithril Dust", 1917);
ModPE.setDust(2120, "orichalcum_dust", 0, "Orichalcum Dust", 1919);
ModPE.setDust(2121, "oureclase_dust", 0, "Oureclase Dust", 1918);
ModPE.setDust(2122, "platinum_dust", 0, "Platinum Dust", 1926);
ModPE.setDust(2123, "prometheum_dust", 0, "Promethreum Dust", 1920);
ModPE.setDust(2124, "quicksilver_dust", 0, "Quicksilver Dust", 1921);
ModPE.setDust(2125, "rubracium_dust", 0, "Rubracium Dust", 1922);
ModPE.setDust(2126, "silver_dust", 0, "Silver Dust", 1927);
ModPE.setDust(2127, "steel_dust", 0, "Steel Dust", 1906);
ModPE.setDust(2128, "tartarite_dust", 0, "Tartarite Dust", 1923);
ModPE.setDust(2129, "tin_dust", 0, "Tin Dust", 1907);
ModPE.setDust(2130, "zinc_dust", 0, "Zinc Dust", 1928);

var crusher = {};
metallurgyCM = {};
metallurgyCM.crusher = {};
metallurgyCM.abstractor = {};
metallurgyCM.smelter = {};
metallurgyCM.furnace ={};
var crushers = {};
crushers.stone = [];
crushers.copper = [];
crushers.bronze = [];
crushers.iron = [];
crushers.steel = [];
var abstractors = [];
abstractors.adamantine = [];
abstractors.atlarus = [];
abstractors.blackSteel = [];
abstractors.deepIron = [];
abstractors.haderoth = [];
abstractors.mithril = [];
abstractors.orichalcum = [];
abstractors.oureclase = [];
abstractors.prometheum = [];
abstractors.tartarite = [];
var furnaces = [];
furnaces.bronze = [];
furnaces.iron = [];
furnaces.steel = [];
var smelters = [];
smelters.ignatius = [];
smelters.inolashite =[];
smelters.kalendrite = [];
smelters.sanguinite = [];
smelters.shadowIron = [];
smelters.shadowSteel = [];
smelters.vulcanite = [];
smelters.vyroxeres = [];

Player.giveXP = function(xp){
	Player.setExp(Player.getExp() + xp);
}

Player.removeItem = function(id, dat, amount){
	Player.addItemInventory(id, -amount, dat);
}

metallurgyCM.newLevel = function(){
	metallurgyCM.loadStoneCrushers();
	if(Level.getGameMode() == 1){
		Player.addItemCreativeInv(196, 2, 0);
	}
	Player.addItemInventory(196, 64, 0);
	Player.addItemInventory(263, 64, 0);
}

metallurgyCM.useItem = function(x, y, z, itemId, blockId, side, itemDat, blockDat){
	switch(blockId){
		case 196:
			switch(blockDat){
				case 0:
					metallurgyCM.crusher.stone(x, y, z, itemId, itemDat);
					break;
				case 1:
					metallurgyCM.crusher.copper(x, y, z, itemId, itemDat);
					break;
				case 2:
					metallurgyCM.crusher.bronze(x, y, z, itemId, itemDat);
					break;
				case 3:
					metallurgyCM.crusher.iron(x, y, z, itemId, itemDat);
					break;
				case 4:
					metallurgyCM.crusher.steel(x, y, z, itemId, itemDat);
					break;
			}
		break;
	}
	switch(itemId){
		case 196:
			switch(itemDat){
				case 0:
					switch(side){
						case 0:
							Level.setTile(x, y - 1, z, 196, 0)
							crushers.stone.push({x:x, y:y - 1, z:z, power:0});
							break;
						case 1:
							Level.setTile(x, y + 1, z, 196, 0)
							crushers.stone.push({x:x, y:y + 1, z:z, power:0});
							break;
						case 2:
							Level.setTile(x, y, z - 1, 196, 0)
							crushers.stone.push({x:x, y:y, z:z - 1, power:0});
							break;
						case 3:
							Level.setTile(x, y, z + 1, 196, 0);
							crushers.stone.push({x:x, y:y, z:z + 1, power:0});
							break;
						case 4:
							Level.setTile(x - 1, y, z, 196, 0);
							crushers.stone.push({x:x - 1, y:y, z:z, power:0});
							break;
						case 5:
							Level.setTile(x + 1, y, z, 196, 0);
							crushers.stone.push({x:x + 1, y:y, z:z, power:0});
							break;
					}
					break;
				case 1:
					switch(side){
						case 0:
							Level.setTile(x, y - 1, z, 196, 1)
							crushers.copper.push({x:x, y:y - 1, z:z, power:0});
							break;
						case 1:
							Level.setTile(x, y + 1, z, 196, 1)
							crushers.copper.push({x:x, y:y + 1, z:z, power:0});
							break;
						case 2:
							Level.setTile(x, y, z - 1, 196, 1)
							crushers.copper.push({x:x, y:y, z:z - 1, power:0});
							break;
						case 3:
							Level.setTile(x, y, z + 1, 196, 1);
							crushers.copper.push({x:x, y:y, z:z + 1, power:0});
							break;
						case 4:
							Level.setTile(x - 1, y, z, 196, 1);
							crushers.copper.push({x:x - 1, y:y, z:z, power:0});
							break;
						case 5:
							Level.setTile(x + 1, y, z, 196, 1);
							crushers.copper.push({x:x + 1, y:y, z:z, power:0});
							break;
					}
					break;
				case 2:
					switch(side){
						case 0:
							Level.setTile(x, y - 1, z, 196, 2)
							crushers.bronze.push({x:x, y:y - 1, z:z, power:0});
							break;
						case 1:
							Level.setTile(x, y + 1, z, 196, 2)
							crushers.bronze.push({x:x, y:y + 1, z:z, power:0});
							break;
						case 2:
							Level.setTile(x, y, z - 1, 196, 2)
							crushers.bronze.push({x:x, y:y, z:z - 1, power:0});
							break;
						case 3:
							Level.setTile(x, y, z + 1, 196, 2);
							crushers.bronze.push({x:x, y:y, z:z + 1, power:0});
							break;
						case 4:
							Level.setTile(x - 1, y, z, 196, 2);
							crushers.bronze.push({x:x - 1, y:y, z:z, power:0});
							break;
						case 5:
							Level.setTile(x + 1, y, z, 196, 2);
							crushers.bronze.push({x:x + 1, y:y, z:z, power:0});
							break;
					}
					break;
				case 3:
					switch(side){
						case 0:
							Level.setTile(x, y - 1, z, 196, 3)
							crushers.iron.push({x:x, y:y - 1, z:z, power:0});
							break;
						case 1:
							Level.setTile(x, y + 1, z, 196, 3)
							crushers.iron.push({x:x, y:y + 1, z:z, power:0});
							break;
						case 2:
							Level.setTile(x, y, z - 1, 196, 3)
							crushers.iron.push({x:x, y:y, z:z - 1, power:0});
							break;
						case 3:
							Level.setTile(x, y, z + 1, 196, 3);
							crushers.iron.push({x:x, y:y, z:z + 1, power:0});
							break;
						case 4:
							Level.setTile(x - 1, y, z, 196, 3);
							crushers.iron.push({x:x - 1, y:y, z:z, power:0});
							break;
						case 5:
							Level.setTile(x + 1, y, z, 196, 3);
							crushers.iron.push({x:x + 1, y:y, z:z, power:0});
							break;
					}
					break;
				case 4:
					switch(side){
						case 0:
							Level.setTile(x, y - 1, z, 196, 3)
							crushers.steel.push({x:x, y:y - 1, z:z, power:0});
							break;
						case 1:
							Level.setTile(x, y + 1, z, 196, 3)
							crushers.steel.push({x:x, y:y + 1, z:z, power:0});
							break;
						case 2:
							Level.setTile(x, y, z - 1, 196, 3)
							crushers.steel.push({x:x, y:y, z:z - 1, power:0});
							break;
						case 3:
							Level.setTile(x, y, z + 1, 196, 3);
							crushers.steel.push({x:x, y:y, z:z + 1, power:0});
							break;
						case 4:
							Level.setTile(x - 1, y, z, 196, 3);
							crushers.steel.push({x:x - 1, y:y, z:z, power:0});
							break;
						case 5:
							Level.setTile(x + 1, y, z, 196, 3);
							crushers.steel.push({x:x + 1, y:y, z:z, power:0});
							break;
					}
					break;
			}
		break;
	}
}

metallurgyCM.crusher.stone = function(x, y, z, itemId, itemDat){
	switch(itemId){
		case 263:
			crusher.addStonePower(x, y, z, 250);
			Player.removeItem(263, itemDat, 1);
			break;
		case 310:
			if(itemDat == 10){
				crusher.addStonePower(x, y, z, 250);
				Player.removeItem(263, 10, 1);
				Player.addItemInventory(263, 1, 1);
			}
			break;
	}
	metallurgyCM.crusher.recipeStoneHook(x, y, z, itemId, itemDat);
}

metallurgyCM.crusher.recipeStoneHook = function(x, y, z, item, dat){
	switch(item){
		case 1908:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1908, 0, 800, 2100, 0);//Adamantine
			break;
		case 1900:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1900, 0, 250, 2101, 0);//Angmallen
			break;
		case 1909:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1909, 0, 475, 2102, 0);//Astral Silver
			break;
		case 1910:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1910, 0, 800, 2103, 0);//Atlarus
			break;
		case 1911:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1911, 0, 175, 2104, 0);//Black Steel
			break;
		case 1924:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1924, 0, 175, 2105, 0);//Brass
			break;
		case 1901:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1901, 0, 175, 2106, 0);//Bronze
			break;
		case 1912:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1912, 0, 475, 2107, 0);//Carmot
			break;
		case 1913:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1913, 0, 600, 2108, 0);//Celenegil
			break;
		case 1902:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1902, 0, 150, 2109, 0)//Copper
			break;
		case 1903:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1903, 0, 175, 2110, 0);//Damscus Steel
			break;
		case 1914:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1914, 0, 175, 2111, 0);//Deep Iron
			break;
		case 1925:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1925, 0, 175, 2112, 0);//Electrum
			break;
		case 266:
			metallurgyCM.crusher.stoneTimer(x, y, z, 266, 0, 175, 2113, 0);//Gold
			break;
		case 1915:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1915, 0, 475, 2114, 0);//Haderoth
			break;
		case 1904:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1904, 0, 250, 2115, 0);//Hepatizon
			break;
		case 1916:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1916, 0, 150, 2116, 0);//Infuscolium
			break;
		case 265:
			metallurgyCM.crusher.stoneTimer(x, y, z, 265, 0, 175, 2117, 0);//Iron
			break;
		case 1905:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1905, 0, 175, 2118, 0);//Manganese
			break;
		case 1917:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1917, 0, 475, 2119, 0);//Mithril
			break;
		case 1919:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1919, 0, 600, 2120, 0);//Orichalcum
			break;
		case 1918:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1918, 0, 250, 2121, 0);//Oureclase
			break;
		case 1926:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1926, 0, 250, 2122, 0);//Platinum
			break;
		case 1920:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1920, 0, 175, 2123, 0);//Prometheum
			break;
		case 1921:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1921, 0, 475, 2124, 0);//Quicksilver
			break;
		case 1922:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1922, 0, 250, 2125, 0);//Rubracium
			break;
		case 1927:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1927, 0, 175, 2126, 0);//Silver
			break;
		case 1906:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1906, 0, 250, 2127, 0);//Steel
			break;
		case 1923:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1923, 0, 800, 2128, 0);//Tartarite
			break;
		case 1907:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1907, 0, 150, 2129, 0);//Tin
			break;
		case 1928:
			metallurgyCM.crusher.stoneTimer(x, y, z, 1928, 0, 150, 2130, 0);//Zinc
	}
}

crushers.startStoneDestroy = function(x, y, z){
	for(var i in crushers.stone){
		var c = crushers.stone[i];
		if(c.x == x && c.y == y && c.z == z){
			if(crusher.getStonePower(c.x, c.y, c.z) > 0){
				ModPE.showTipMessage(ChatColor.RED + "WARNING: Breaking the crusher will empty it!")
			}
		}
	}
}

metallurgyCM.crusher.stoneTimer = function(x, y, z, item, dat, powerRemove, out, outDat){
	if(crusher.getStonePower(x, y, z) >= powerRemove){
		var dustDropChance = Math.ceil(Math.random() * 3);
		Player.removeItem(item, dat, 1);
		crusher.removeStonePower(x, y, z, powerRemove)
		for(var i = 1800; i >= 0; i--){
			Level.playSound(x, y, z, "crusher.run", 100, 25);
			if(i == 0){
				Level.dropItem(x, y + 1.25, z, .2, out, dustDropChance, outDat);
				Level.playSound(x, y, z, "machine.ding", 100, 25);
			}
		}
	} else {
		ModPE.showTipMessage(ChatColor.RED + "Not enough power!");
	}
}

metallurgyCM.loadStoneCrushers = function(){
	var content = ModPE.loadWorldFile("stonecrusher.dat");
	var lines = content.split(";");
	for(var i=0;i<lines.length;i++){
		var par = lines[i].split(",");
		var x = parseInt(par[0]);
		var y = parseInt(par[1]);
		var z = parseInt(par[2]);
		var mB = parseFloat(par[3]);
		if(x != NaN && y != NaN && z != NaN && mB != NaN){
			crushers.stone.push({x:x, y:y, z:z, power:mB});
		}
	}
}

metallurgyCM.saveStoneCrushers = function(){
	var saveStr = "";
	for(var i = 0;i < crushers.stone.length; i++){
		var c = crushers.stone[i];
		var crush = [c.x, c.y, c.z, c.power];
		saveStr += crush.join(",") + ";";
	}
	ModPE.saveWorldFile("stonecrusher.dat", saveStr);
}

crusher.addStonePower = function(x, y, z, powerAmount){
	for(var i in crushers.stone){
		var c = crushers.stone[i];
		if(c.x == x && c.y == y && c.z == z){
			c.power+=(powerAmount);
			ModPE.showTipMessage(ChatColor.RED + "Power: " + c.power + "mB");
		}
	}
}

crusher.removeStonePower = function(x, y, z, powerAmount){
	for(var i in crushers.stone){
		var c = crushers.stone[i];
		if(c.x == x && c.y == y && c.z == z){
			c.power-=(powerAmount);
			ModPE.showTipMessage(ChatColor.RED + "Power: " + c.power + "mB");
		}
	}
}

crusher.getStonePower = function(x, y, z){
	for(var i in crushers.stone){
		var c = crushers.stone[i];
		if(c.x == x && c.y == y && c.z == z){
			return c.power;
		}
	}
}

metallurgyCM.crusher.copper = function(x, y, z, itemId, itemDat, blockDat){

}

metallurgyCM.crusher.bronze = function(x, y, z, itemId, itemDat){

}

metallurgyCM.crusher.iron = function(x, y, z, itemId, itemDat){

}

metallurgyCM.crusher.steel = function(x, y, z, itemId, itemDat){

}

metallurgyCM.modTick = function(){

}
metallurgyCM.startDestroyBlock = function(x, y, z){
	var block = Level.getTile(x, y, z);
	var data = Level.getData(x, y, z);
	switch(block){
		case 196:
			switch(data){
				case 0:
					crushers.startStoneDestroy(x, y, z);
					break;
			}
			break;
	}
}

metallurgyCM.destroyBlock = function(x, y, z, side){
	var block = Level.getTile(x, y, z);
	var data = Level.getData(x, y, z);
	switch(block){
		case 196:
			switch(data){
				case 0:
					for(var i in crushers.stone){
						var c = crushers.stone[i];
						if(c.x = x && c.y == y && c.z == z){
							crushers.stone.splice(i, 1);
						}
					}
					Level.dropItem(x, y, z, 0.5, 196, 1, 0);
					break;

			}
	}
}

metallurgyCM.leaveGame = function(){
	//Crushers
	metallurgyCM.saveStoneCrushers();
}

function newLevel(){BetterStorage.newLevel();metallurgyCM.newLevel();}
function modTick(){BetterStorage.modTick();metallurgyCM.modTick();}
function useItem(x,y,z,itemID,blockID,side,itemDat,blockDat){BetterStorage.useItem(x,y,z,itemID,blockID,side,itemDat,blockDat);metallurgyCM.useItem(x, y, z, itemID, blockID, side, itemDat, blockDat);}
function destroyBlock(x,y,z,side){BetterStorage.destroyBlock(x,y,z,side);metallurgyCM.destroyBlock(x, y, z, side);}
function startDestroyBlock(x,y,z,side){metallurgyCM.startDestroyBlock(x,y,z,side);}
function leaveGame(){metallurgyCM.leaveGame();}

//LEAVE EVERYTHING BELOW THIS LINE
//LEAVE EVERYTHING BELOW THIS LINE
GUI.openInventory=function(){
	if(inventoryGUI)
		return;
	invItemButtons={};
	playerInvItemButtons={};
	playerInvItemButtons.length=function(){
		var l=0;
		for(slot in playerInvItemButtons)
			l++;
		return l-1;
		}
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				//WINDOW
				inventoryGUI=new android.widget.PopupWindow(display.widthPixels,display.heightPixels);
				var window=new android.widget.LinearLayout(activity);
				window.setOrientation(android.widget.LinearLayout.VERTICAL);
				//TOP BAR (mainLayout)
				var topBar=new android.widget.LinearLayout(activity);
				topBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				topBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels,display.heightPixels*(1/7)));
				//LEFT TOP BAR (inventory)
				var leftTopBar=new android.widget.LinearLayout(activity);
				leftTopBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				leftTopBar.setBackgroundDrawable(topBarBackground);
				leftTopBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/2,display.heightPixels*(1/7)));
				leftTopBar.setGravity(android.view.Gravity.CENTER);
				//RIGHT TOP BAR (backpack)
				var rightTopBar=new android.widget.LinearLayout(activity);
				rightTopBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				rightTopBar.setBackgroundDrawable(topBarBackground);
				rightTopBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/2,display.heightPixels*(1/7)));
				rightTopBar.setGravity(android.view.Gravity.CENTER);
				//BODY (mainLayout)
				var body=new android.widget.LinearLayout(activity);
				body.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				body.setBackgroundDrawable(bodyBackground);
				body.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels,display.heightPixels*(6/7)));
				//LEFT BODY (mainLayout)
				var leftBody=new android.widget.LinearLayout(activity);
				leftBody.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				leftBody.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/2,display.heightPixels*(6/7)));
				leftBody.setGravity(android.view.Gravity.CENTER);
				//RIGHT BODY (mainLayout)
				var rightBody=new android.widget.LinearLayout(activity);
				rightBody.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				rightBody.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/2,display.heightPixels*(6/7)));
				rightBody.setGravity(android.view.Gravity.CENTER);
				//LEFT SCROLL VIEW (inventory)
				var leftScrollView=new android.widget.ScrollView(activity);
				leftScrollView.setBackgroundDrawable(invBackground);
				leftScrollView.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels/2.4,display.heightPixels/1.23));
				//RIGHT SCROLL VIEW (inventory)
				var rightScrollView=new android.widget.ScrollView(activity);
				rightScrollView.setBackgroundDrawable(invBackground);
				rightScrollView.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels/2.4,display.heightPixels/1.23));
				
				//LEFT TOP BAR TEXT (inventory)
				var leftTopBarText=new android.widget.TextView(activity);
				leftTopBarText.setText("Inventory");
				leftTopBarText.setTextSize(16);
				leftTopBarText.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				leftTopBarText.setTypeface(font);
				leftTopBarText.setPaintFlags(leftTopBarText.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) leftTopBarText.setShadowLayer(1,Math.round((leftTopBarText.getLineHeight()-4*display.density)/8),Math.round((leftTopBarText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else leftTopBarText.setShadowLayer(0.0001,Math.round((leftTopBarText.getLineHeight()-4*display.density)/8),Math.round((leftTopBarText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				//RIGHT TOP BAR TEXT (inventory)
				var rightTopBarText=new android.widget.TextView(activity);
				rightTopBarText.setText("BetterStorage");
				rightTopBarText.setTextSize(16);
				rightTopBarText.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				rightTopBarText.setTypeface(font);
				rightTopBarText.setPaintFlags(rightTopBarText.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) rightTopBarText.setShadowLayer(1,Math.round((rightTopBarText.getLineHeight()-4*display.density)/8),Math.round((rightTopBarText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else rightTopBarText.setShadowLayer(0.0001,Math.round((rightTopBarText.getLineHeight()-4*display.density)/8),Math.round((rightTopBarText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				
				//ARRANGE LAYOUTS
				leftTopBar.addView(leftTopBarText);
				topBar.addView(leftTopBar);
				rightTopBar.addView(rightTopBarText);
				topBar.addView(rightTopBar);
				window.addView(topBar);
				leftScrollView.addView(GUI.showInventory("player",36,Player.getItems()));
				leftBody.addView(leftScrollView);
				body.addView(leftBody);
				rightScrollView.addView(GUI.showInventory("inventory",inventory[String(invID)].size,Inventory.getItems()));
				rightBody.addView(rightScrollView);
				body.addView(rightBody);
				window.addView(body);
				
				inventoryGUI.setContentView(window);
				inventoryGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				inventoryGUI.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.LEFT,0,0);
				}
			catch(err){
				clientMessage("GUI.openInventory: "+err);
				}
			}
		}));
	GUI.closeButton();
	}
Player.getItems=function(){
	var inv={};
	for(var i=9;i<45;i++){
		if(Player.getInventorySlot(i)!=0)
			inv[i]=[Player.getInventorySlot(i),Player.getInventorySlotData(i),Player.getInventorySlotCount(i)];
		else
			inv[i]=[0,0,0];
		}
	return inv;
	}
Inventory.getItems=function(){
	var inv={};
	for(slot in inventory[String(invID)].items)
		inv[slot]=[inventory[String(invID)].items[slot][0],inventory[String(invID)].items[slot][1],inventory[String(invID)].items[slot][2]];
	return inv;
	}
Player.addItem=function(id,dmg,amt){
	if(Player.full(id,dmg,amt))
		return false;
	for(var slot=0;slot<playerInvItemButtons.length();slot++){
		if((playerInvItemButtons[slot][0]==id && playerInvItemButtons[slot][1]==dmg && playerInvItemButtons[slot][2]+amt<=64) || playerInvItemButtons[slot][2]==0){
			for(var i=9;i<45;i++){
				if((Player.getInventorySlot(i)==id && Player.getInventorySlotData(i)==dmg && Player.getInventorySlotCount(i)+amt<=64) || Player.getInventorySlot(i)==0){
					net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i,id,Player.getInventorySlotCount(i)+amt,dmg);
					break;
					}
				}
			playerInvItemButtons[slot][0]=id;
			playerInvItemButtons[slot][1]=dmg;
			playerInvItemButtons[slot][2]+=amt;
			playerInvItemButtons[slot][3].setText("  "+playerInvItemButtons[slot][2]);
			try{playerInvItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/"+id+"-"+dmg+".png"))));}
			catch(err){playerInvItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/no-id.png"))));}
			return true;
			}
		}
	return false;
	}
Inventory.addItems=function(id,dmg,amt){
	if(Inventory.full(id,dmg,amt))
		return false;
	for(slot in inventory[String(invID)].items){
		if((inventory[String(invID)].items[slot][0]==id && inventory[String(invID)].items[slot][1]==dmg && inventory[String(invID)].items[slot][2]+amt<=64) || inventory[String(invID)].items[slot][2]==0){
			inventory[String(invID)].items[slot][0]=id;
			inventory[String(invID)].items[slot][1]=dmg;
			inventory[String(invID)].items[slot][2]+=amt;
			invItemButtons[slot][0]=id;
			invItemButtons[slot][1]=dmg;
			invItemButtons[slot][2]+=amt;
			invItemButtons[slot][3].setText("  "+invItemButtons[slot][2]);
			try{invItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/"+id+"-"+dmg+".png"))));}
			catch(err){invItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/no-id.png"))));}
			return true;
			}
		}
	return false;
	}
Player.setInventorySlotCount=function(slot,amt){
	if(playerInvItemButtons[slot][2]+amt==0){
		for(var i=9;i<45;i++){
			if(Player.getInventorySlot(i)==playerInvItemButtons[slot][0] && Player.getInventorySlotData(i)==playerInvItemButtons[slot][1] && Player.getInventorySlotCount(i)==playerInvItemButtons[slot][2]){
				net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i,0,0,0);
				break;
				}
			}
		playerInvItemButtons[slot][0]=0;
		playerInvItemButtons[slot][1]=0;
		playerInvItemButtons[slot][2]=0;
		playerInvItemButtons[slot][3].setText("  ");
		playerInvItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/0-0.png"))));
		}
	else{
		for(var i=9;i<45;i++){
			if(Player.getInventorySlot(i)==playerInvItemButtons[slot][0] && Player.getInventorySlotData(i)==playerInvItemButtons[slot][1] && Player.getInventorySlotCount(i)==playerInvItemButtons[slot][2]){
				net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i,Player.getInventorySlot(i),Player.getInventorySlotCount(i)+amt,Player.getInventorySlotData(i));
				break;
				}
			}
		playerInvItemButtons[slot][2]=playerInvItemButtons[slot][2]+amt;
		playerInvItemButtons[slot][3].setText("  "+playerInvItemButtons[slot][2]);
		}
	}
Inventory.setInventorySlotCount=function(slot,amt){
	if(invItemButtons[slot][2]+amt==0){
		for(i in inventory[String(invID)].items){
			if(inventory[String(invID)].items[i][0]==invItemButtons[slot][0] && inventory[String(invID)].items[i][1]==invItemButtons[slot][1] && inventory[String(invID)].items[i][2]==invItemButtons[slot][2]){
				inventory[String(invID)].items[i][0]=0;
				inventory[String(invID)].items[i][1]=0;
				inventory[String(invID)].items[i][2]=0;
				break;
				}
			}
		invItemButtons[slot][0]=0;
		invItemButtons[slot][1]=0;
		invItemButtons[slot][2]=0;
		invItemButtons[slot][3].setText("  ");
		invItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/0-0.png"))));
		}
	else{
		for(i in inventory[String(invID)].items){
			if(inventory[String(invID)].items[i][0]==invItemButtons[slot][0] && inventory[String(invID)].items[i][1]==invItemButtons[slot][1] && inventory[String(invID)].items[i][2]==invItemButtons[slot][2]){
				inventory[String(invID)].items[i][2]+=amt;
				break;
				}
			}
		invItemButtons[slot][2]+=amt;
		invItemButtons[slot][3].setText("  "+invItemButtons[slot][2]);
		}
	}
Player.full=function(id,dmg,amt){
	var inv=Player.getItems();
	for(i in inv){
		if((inv[i][0]==id && inv[i][1]==dmg && inv[i][2]+amt<=64) || inv[i][2]==0)
			return false;
		}
	return true;
	}
Inventory.full=function(id,dmg,amt){
	var inv=Inventory.getItems();
	for(i in inv){
		if((inv[i][0]==id && inv[i][1]==dmg && inv[i][2]+amt<=64) || inv[i][2]==0)
			return false;
		}
	return true;
	}
GUI.showInventory=function(invType,n,itemz){
	var items=[];
	for(i in itemz)
		items.push(itemz[i]);
	var mainLayout=new android.widget.LinearLayout(activity);
	mainLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
	var row=[];
	for(var i=0;i<Math.round((n/5)-0.5);i++)
		row.push(new android.widget.LinearLayout(activity));
	if(Math.round((n/5)-0.5)!=n/5)
		row.push(new android.widget.LinearLayout(activity));
	for(var i=0;i<row.length;i++){
		row[i].setOrientation(android.widget.LinearLayout.HORIZONTAL);
		row[i].setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/2.4,(display.widthPixels/2.4)/5));
		}
	var noItmz=row.length-1;
	if(n-Math.round((n/5)-0.5)*5==0)
		noItmz++;
	for(var i=0;i<noItmz;i++){
		row[i].addView(GUI.createButton(i*5+0,items[i*5+0][0],items[i*5+0][1],items[i*5+0][2],invType));
		row[i].addView(GUI.createButton(i*5+1,items[i*5+1][0],items[i*5+1][1],items[i*5+1][2],invType));
		row[i].addView(GUI.createButton(i*5+2,items[i*5+2][0],items[i*5+2][1],items[i*5+2][2],invType));
		row[i].addView(GUI.createButton(i*5+3,items[i*5+3][0],items[i*5+3][1],items[i*5+3][2],invType));
		row[i].addView(GUI.createButton(i*5+4,items[i*5+4][0],items[i*5+4][1],items[i*5+4][2],invType));
		}
	for(var i=0;i<n-Math.round((n/5)-0.5)*5;i++)
		row[row.length-1].addView(GUI.createButton((row.length-1)*5+i,items[(row.length-1)*5+i][0],items[(row.length-1)*5+i][1],items[(row.length-1)*5+i][2],invType));
	for(var i=0;i<row.length;i++)
		mainLayout.addView(row[i]);
	return mainLayout;
	}
GUI.createButton=function(slot,id,dmg,amt,invType){
	var miniLayout=new android.widget.LinearLayout(activity);
	miniLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
	miniLayout.setBackgroundDrawable(itemBg);
	miniLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams((display.widthPixels/2.4)/5,(display.widthPixels/2.4)/5));
	miniLayout.setGravity(android.view.Gravity.CENTER);
	var btn=new android.widget.Button(activity);
	try{btn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/"+id+"-"+dmg+".png"))));}
	catch(err){btn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/no-id.png"))));}
	btn.setLayoutParams(new android.widget.LinearLayout.LayoutParams((display.widthPixels/2.4)/5-(display.widthPixels/2.4)/12,(display.widthPixels/2.4)/5-(display.widthPixels/2.4)/12));
	btn.setOnTouchListener(new android.view.View.OnTouchListener({
		onTouch: function(v,motionEvent){
			var action=motionEvent.getActionMasked();
			if(action==android.view.MotionEvent.ACTION_DOWN){
				if(!calc && ((invType=="player" && playerInvItemButtons[slot][2]>0) || (invType=="inventory" && invItemButtons[slot][2]>0))){
					if(invType=="player") maxCalc=playerInvItemButtons[slot][2]+4;
					else maxCalc=invItemButtons[slot][2]+4;
					calcAmount=0;
					calc=true;
					selectedLayout=miniLayout;
					}
				}
			if(action==android.view.MotionEvent.ACTION_CANCEL || action==android.view.MotionEvent.ACTION_UP){
				selectedLayout=null;
				miniLayout.setBackgroundDrawable(itemBg);
				var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
				if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY())){
					if(invType=="player" && calcAmount>0){
						if(calcAmount>4) calcAmount-=4;
						else calcAmount=1;
						id=Player.getInventorySlot(slot+9);
						dmg=Player.getInventorySlotData(slot+9);
						amt=Player.getInventorySlotCount(slot+9);
						if(Inventory.addItems(id,dmg,calcAmount))
							Player.setInventorySlotCount(slot,-calcAmount);
						}
					else if(invType=="inventory" && calcAmount>0){
						if(calcAmount>4) calcAmount-=4;
						else calcAmount=1;
						if(Player.addItem(inventory[String(invID)].items[slot][0],inventory[String(invID)].items[slot][1],calcAmount))
							Inventory.setInventorySlotCount(slot,-calcAmount);
						}
					calc=false;
					calcAmount=0;
					maxCalc=0;
					}
				calc=false;
				calcAmount=0;
				maxCalc=0;
				}
			if(action==android.view.MotionEvent.ACTION_MOVE){
				var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
				if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY())){
					if(v.getTag()==false){
						closeButton.setTag(true);
						closeButton.setBackgroundDrawable(xButtonPressed);
						}
					}
				else{
					if(v.getTag()==true){
						closeButton.setTag(false);
						closeButton.setBackgroundDrawable(xButton);
						}
					}
				}
			return false;
			}
		}));
	var txt=new android.widget.TextView(activity);
	if(amt>0) txt.setText("  "+amt);
	else txt.setText("   ");
	txt.setTextSize(8);
	miniLayout.addView(txt);
	miniLayout.addView(btn);
	if(invType=="player")
		playerInvItemButtons[slot]=[id,dmg,amt,txt,btn];
	else
		invItemButtons[slot]=[id,dmg,amt,txt,btn];
	return miniLayout;
	}
GUI.closeButton=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			close=new android.widget.PopupWindow(display.widthPixels/17,display.heightPixels/9.6);
			var closeButton=android.widget.Button(activity);
			closeButton.setBackgroundDrawable(xButton);
			closeButton.setOnTouchListener(new android.view.View.OnTouchListener(){
				onTouch: function(v,motionEvent){
					var action=motionEvent.getActionMasked();
					if(action==android.view.MotionEvent.ACTION_DOWN)
						closeButton.setBackgroundDrawable(xButtonPressed);
					if(action==android.view.MotionEvent.ACTION_CANCEL || action==android.view.MotionEvent.ACTION_UP){
						closeButton.setBackgroundDrawable(xButton);
						var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
						if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY()))
							Level.playSoundEnt(Player.getEntity(),"random.click",100,30);
						}
					if(action==android.view.MotionEvent.ACTION_MOVE){
						var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
						if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY())){
							if(v.getTag()==false){
								closeButton.setTag(true);
								closeButton.setBackgroundDrawable(xButtonPressed);
								}
							}
						else{
							if(v.getTag()==true){
								closeButton.setTag(false);
								closeButton.setBackgroundDrawable(xButton);
								}
							}
						}
					return false;
					}
				});
			closeButton.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					GUI.closeInventory();
					GUI.closeCloseButton();
					ModPE.saveData();
					}
				}));
			close.setContentView(closeButton);
			close.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			close.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.RIGHT,0,display.heightPixels/120);
			}
		}));
	}
GUI.closeInventory=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(inventoryGUI!=null){
				inventoryGUI.dismiss();
				inventoryGUI=null;
				}
			}
		}));
	}
GUI.closeCloseButton=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(close!=null){
				close.dismiss();
				close=null;
				}
			}
		}));
	}
ModPE.setBackpack=function(id,n){
	inventory[String(id)]={size:n,items:Inventory.loadData(String(id))};
	if(inventory[String(id)].items==false){
		inventory[String(id)].items={};
		for(var i=0;i<n;i++)
			inventory[String(id)].items[i]=[0,0,0];
		}
	}
ModPE.setInventory=function(x,y,z,n){
	inventory[String([x,y,z])]={size:n,items:Inventory.loadData(String([x,y,z]))};
	if(inventory[String([x,y,z])].items==false){
		inventory[String([x,y,z])].items={};
		for(var i=0;i<n;i++)
			inventory[String([x,y,z])].items[i]=[0,0,0];
		}
	}
ModPE.loadData=function(){
	var data=new java.io.File(new android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/BetterStorage.txt");
	if(!data.exists())
		return false;
	var fos=new java.io.FileInputStream(data);
	var str=new java.lang.StringBuilder();
	var ch;
	while((ch=fos.read())!=-1)
		str.append(java.lang.Character(ch));
	return String(str.toString()).split("\n");
	fos.close();
	}
Inventory.loadData=function(id){	
	var data=new java.io.File(new android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/BetterStorage.txt");
	if(!data.exists())
		return false;
	for(var i=0;i<invData.length;i++){
		if(invData[i].split(":")[0]==id){
			var sze=parseInt(invData[i].split(":")[1]);
			var itmz={};
			for(var j=0;j<sze;j++)
				itmz[j]=[parseInt(invData[i].split(":[")[1].split("],[")[j].split("],")[0].split(",")[0]),parseInt(invData[i].split(":[")[1].split("],[")[j].split("],")[0].split(",")[1]),parseInt(invData[i].split(":[")[1].split("],[")[j].split("],")[0].split(",")[2])];
			return itmz;
			}
		}
	return false;
	}
ModPE.saveData=function(){
	var data=new java.io.File(new android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/BetterStorage.txt");
	if(data.exists())
		data.delete();
	data.createNewFile();
	var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(data));
	var tmp=false;
	for(key in inventory){
		var temp="";
		if(!tmp) tmp=true;
		else temp+="\n";
		temp+=String(key)+":"+inventory[String(key)].size+":";
		for(slot in inventory[String(key)].items)
			temp+="["+String(inventory[String(key)].items[slot])+"],"
		outWrite.append(temp);
		}
	outWrite.close();
	}
BetterStorage.newLevel=function(){
	inventory={};
	invData=ModPE.loadData();
	}
BetterStorage.modTick=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			try{
				if(calc && calcAmount<maxCalc)
					calcAmount++;
				if(selectedLayout && calcAmount>=4 && maxCalc>0){
					var cs=android.graphics.Bitmap.createBitmap((display.widthPixels/2.4)/5,(display.widthPixels/2.4)/5,android.graphics.Bitmap.Config.ARGB_8888);
					var comboImage=new android.graphics.Canvas(cs);
					var paint=new android.graphics.Paint();
					comboImage.drawBitmap(new android.graphics.Bitmap.createScaledBitmap(itemBg.getBitmap(),(display.widthPixels/2.4)/5,(display.widthPixels/2.4)/5,false),0,0,null);
					paint.setColor(android.graphics.Color.GREEN);
					comboImage.drawRect(0,0,((calcAmount-4)/maxCalc)*((display.widthPixels/2.4)/5),(display.widthPixels/2.4)/50,paint);
					selectedLayout.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(cs));
					}
				}
			catch(err){
				print(err);
				}
			}
		}));
	}
BetterStorage.useItem=function(x,y,z,itemID,blockID,side){
	if(storageBlocks[blockID]){
		preventDefault();
		invID=String([x,y,z]);
		if(!inventory[String(invID)])
			ModPE.setInventory(x,y,z,storageBlocks[blockID]);
		GUI.openInventory();
		}
	else if(itemID>255 && storageBlocks[itemID]){
		preventDefault();
		invID=String(itemID);
		if(!inventory[String(itemID)])
			ModPE.setBackpack(itemID,storageBlocks[itemID]);
		GUI.openInventory();
		}
	}
BetterStorage.destroyBlock=function(x,y,z,side){
	if(inventory[String([x,y,z])]){
		for(i in inventory[String([x,y,z])].items){
			if(inventory[String([x,y,z])].items[i][0]!=0)
				Level.dropItem(x,y,z,0,inventory[String([x,y,z])].items[i][0],inventory[String([x,y,z])].items[i][2],inventory[String([x,y,z])].items[i][1]);
			}
		delete inventory[String([x,y,z])];
		}
	}
BetterStorage.getInventorySlot=function(x,y,z,slot){
	if(Level.getTile(x,y,z)==54)
		return Level.getChestSlot(x,y,z,slot);
	else if(storageBlocks[Level.getTile(x,y,z)])
		return parseInt(inventory[String([x,y,z])].items[slot][0]);
	else
		return null;
	}
BetterStorage.getInventorySlotData=function(x,y,z,slot){
	if(Level.getTile(x,y,z)==54)
		return Level.getChestSlotData(x,y,z,slot);
	else if(storageBlocks[Level.getTile(x,y,z)])
		return parseInt(inventory[String([x,y,z])].items[slot][1]);
	else
		return null;
	}
BetterStorage.getInventorySlotCount=function(x,y,z,slot){
	if(Level.getTile(x,y,z)==54)
		return Level.getChestSlotCount(x,y,z,slot);
	else if(storageBlocks[Level.getTile(x,y,z)])
		return parseInt(inventory[String([x,y,z])].items[slot][2]);
	else
		return null;
	}
BetterStorage.setInventorySlot=function(x,y,z,slot,id,dmg,amt){
	if(Level.getTile(x,y,z)==54)
		Level.setChestSlot(x,y,z,slot,id,dmg,amt);
	else if(inventory[String([x,yz])])
		inventory[String([x,yz])].items[slot]=[id,dmg,amt];
	}
function DefineInventory(id,name,texture,materialSourceId,opaque,rendertype,size){
	Block.defineBlock(id,name,texture,materialSourceId,opaque,rendertype);
	storageBlocks[id]=size;
	}
function SetInventory(id,texture,type,name,stacksize,size){
	ModPE.setItem(id,texture,type,name,stacksize);
	storageBlocks[id]=size;
	}

var inventoryGUI=null;
var close=null;
var invItemButtons={};
var invData;
var selectedLayout;
var playerInvItemButtons={};
var inventory={};
var calc=false;
var calcAmount=0;
var maxCalc=0;

var topBarBackground=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/topBarBackground.png")));
var bodyBackground=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/bodyBackground.png")));
var invBackground=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/invBackground.png")));
var itemBg=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/itemBackground.png")));
var xButton=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/xButton.png")));
var xButtonPressed=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/xButton_.png")));
var font;

//Minecraft font
//I copied this from Desno365's Button Lib
writeFileFromByteArray(android.util.Base64.decode("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AICAgID/AP8AAgCAgICAgICAAAAAAQAAAgAAgAOAAAMAABkBMxGAAgABgP6AAAAAAAUAAAAAAgADgAADAAcACwAPABMAACE1IRUlNTMVJREzGQE1MxU9ASEVAQABAP6AgP8AgIABAICAgICAgAGA/oABgICAgICAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU9ATMVNREzEQE1MxUlNSEVAQCAgP8AgP6AAQCAgICAgIABgP6AAYCAgICAgAAAAAUAAAEAAgACgAADAAcACwAPABMAABE1MxUhNTMVJTUhFSU1MxUhNTMVgAEAgP6AAQD+gIABAIABAICAgICAgICAgICAgAAAAAEAAACAAoADAAALAAAlESE1IREzESEVIREBAP8AAQCAAQD/AIABAIABAP8AgP8AAAEAAP+AAIABAAADAAAVETMRgIABgP6AAAEAAAGAAoACAAADAAARNSEVAoABgICAAAEAAAAAAIABAAADAAAxETMRgAEA/wAAAAUAAAAAAoADgAADAAcACwAPABMAADE1MxU1ETMZATUzFTURMxkBNTMVgICAgICAgIABAP8AAQCAgIABAP8AAQCAgAAABQAAAAACgAOAAAMABwAPABcAGwAAMzUhFQE1MxUBETMRMxUjFSERIzUzNTMRATUhFYABgP8AgP6AgICAAYCAgID+AAGAgIABgICA/wACgP6AgIABgICA/YACgICAAAAAAQAAAAACgAOAAAsAADE1IREjNTM1MxEhFQEAgICAAQCAAgCAgP0AgAAAAAAGAAAAAAKAA4AABwALAA8AEwAXABsAADERMxUhNTMRATUzFT0BIRUBNTMVBREzEQE1IRWAAYCA/gCAAQD+AIABgID+AAGAAQCAgP8AAQCAgICAgAEAgICAAQD/AAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlNTMVIREzEQE1IRUBNTMVBREzEQE1IRWAAYD+AIABgID+gAEA/gCAAYCA/gABgICAgICAAQD/AAEAgIABAICAgAEA/wABAICAAAADAAAAAAKAA4AAAwAHABMAABM1MxU9ATMVExEhETMVIREjNSERgICAgP4AgAGAgAEAAgCAgICAgP2AAQABAIABgID8gAAAAAAEAAAAAAKAA4AAAwAHAAsAEwAAMzUhFSU1MxUhETMRAREhFSEVIRWAAYD+AIABgID9gAKA/gABgICAgICAAYD+gAGAAYCAgIAAAAAABQAAAAACgAOAAAMABwAPABMAFwAAMzUhFTURMxEhETMVIRUhGQE1MxU9ASEVgAGAgP2AgAGA/oCAAQCAgIABAP8AAgCAgP8AAgCAgICAgAADAAAAAAKAA4AAAwAHAA8AACERMxkBNTMVNREhFSMRIREBAICA/oCAAoABgP6AAYCAgIABAIABAP6AAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAQD/AAEA/wABAICAgAEA/wABAP8AAQCAgAAAAAAFAAAAAAKAA4AAAwAHAAsAEwAXAAAzNSEVPQEzFQERMxEBNSE1IREzEQE1IRWAAQCA/gCAAYD+gAGAgP4AAYCAgICAgAGAAQD/AP8AgIABAP4AAgCAgAAAAgAAAAAAgAKAAAMABwAAMREzEQMRMxGAgIABAP8AAYABAP8AAAAAAAIAAP+AAIACgAADAAcAABURMxEDETMRgICAgAGA/oACAAEA/wAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAITUzFSU1MxUlNTMVJTUzFT0BMxU9ATMVPQEzFQGAgP8AgP8AgP8AgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAIAAACAAoACAAADAAcAAD0BIRUBNSEVAoD9gAKAgICAAQCAgAAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAMTUzFT0BMxU9ATMVPQEzFSU1MxUlNTMVJTUzFYCAgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhNTMVAzUzFT0BMxUBNTMVBREzEQE1IRUBAICAgID+AIABgID+AAGAgIABAICAgICAAQCAgIABAP8AAQCAgAAAAAQAAAAAAwADgAADAAcADwATAAAzNSEVJREzETcRIREzETMRATUhFYACAP2AgIABAICA/YACAICAgAKA/YCAAYD/AAGA/gACAICAAAACAAAAAAKAA4AACwAPAAAxETMVITUzESMRIRkBNSEVgAGAgID+gAGAAwCAgP0AAgD+AAMAgIAAAAMAAAAAAoADgAADAAcAEwAAJREzEQM1MxUBESEVIRUhFSERIRUCAICAgP2AAgD+gAGA/oABgIABgP6AAgCAgP2AA4CAgID+gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIACgP2AAgCAgICAgAACAAAAAAKAA4AAAwALAAAlETMRBREhFSERIRUCAID9gAIA/oABgIACgP2AgAOAgP2AgAAAAQAAAAACgAOAAAsAADERIRUhFSEVIREhFQKA/gABAP8AAgADgICAgP6AgAABAAAAAAKAA4AACQAAMREhFSEVIRUhEQKA/gABAP8AA4CAgID+AAAABAAAAAACgAOAAAMACQANABEAADM1IRU1ESM1IREhETMZATUhFYABgIABAP2AgAIAgICAAYCA/gACgP2AAoCAgAAAAAABAAAAAAKAA4AACwAAMREzESERMxEjESERgAGAgID+gAOA/wABAPyAAgD+AAAAAAABAAAAAAGAA4AACwAAMTUzESM1IRUjETMVgIABgICAgAKAgID9gIAAAwAAAAACgAOAAAMABwALAAAzNSEVJTUzFSERMxGAAYD+AIABgICAgICAgAMA/QAABQAAAAACgAOAAAMABwALABMAFwAAIREzEQE1MxUDNTMVAREzESEVIREBNTMVAgCA/wCAgID+AIABAP8AAYCAAYD+gAGAgIABAICA/YADgP8AgP4AAwCAgAAAAAABAAAAAAKAA4AABQAAMREzESEVgAIAA4D9AIAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MzUzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YACgICA/IAAAAAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MxEzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YABgIABgPyAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGAgICAAoD9gAKA/YACgICAAAIAAAAAAoADgAADAA0AAAE1MxUBESEVIRUhFSERAgCA/YACAP6AAYD+gAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVMzUzFSU1MxUhETMRJREzEQE1IRWAAQCAgP8AgP4AgAGAgP4AAYCAgICAgICAAoD9gIACAP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAIREzEQM1MxUBESEVIRUhFSERAgCAgID9gAIA/oABgP6AAgD+AAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJTUzFSERMxEBNSEVJTUzFT0BIRWAAYD+AIABgID+AAGA/gCAAgCAgICAgAGA/oABgICAgICAgICAAAAAAAEAAAAAAoADgAAHAAAhESE1IRUhEQEA/wACgP8AAwCAgP0AAAMAAAAAAoADgAADAAcACwAAMzUhFSURMxEhETMRgAGA/gCAAYCAgICAAwD9AAMA/QAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzETMRMxEBETMRIREzEQEAgP8AgICA/gCAAYCAgICAAQD/AAEA/wABAAIA/gACAP4AAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxEzFSMVITUjNTMRMxEBAID+gICAgAGAgICAAQCAgP8AA4D9gICAgIACgPyAAAAAAAkAAAAAAoADgAADAAcACwAPABMAFwAbAB8AIwAAMREzESERMxEBNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgIABgP6AAYD+gAGAgICAgICAgICAgICAgICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBAID/AICAgP4AgAGAgAKA/YACgICAgICAgICAgAAABQAAAAACgAOAAAUACQANABEAFwAAMREzFSEVATUzFT0BMxU9ATMVPQEhNSERgAIA/gCAgID+AAKAAQCAgAEAgICAgICAgICAgID/AAAAAAABAAAAAAGAA4AABwAAMREhFSERIRUBgP8AAQADgID9gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzEQE1MxUlETMRATUzFQIAgP8AgP8AgP8AgP8AgICAgAEA/wABAICAgAEA/wABAICAAAAAAAEAAAAAAYADgAAHAAAxNSERITUhEQEA/wABgIACgID8gAAAAAUAAAIAAoADgAADAAcACwAPABMAABE1MxUhNTMVJTUzFTM1MxUlNTMVgAGAgP4AgICA/wCAAgCAgICAgICAgICAgIAAAQAA/4ACgAAAAAMAABU1IRUCgICAgAAAAQAAAwABAAOAAAMAABE1IRUBAAMAgIAAAwAAAAACgAKAAAMADQARAAA9ATMdATUhNSE1ITUzEQE1IRWAAYD+gAGAgP4AAYCAgICAgICAgP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAJREzEQE1IRUBETMRMxUjESEVAgCA/oABAP4AgICAAYCAAYD+gAGAgID+AAOA/oCA/wCAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADM1IRU9ATMVIREzEQE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAgICAgAGA/oABAICAgICAAAMAAAAAAoADgAADAAcAEQAANREzGQE1IRUBNSERIzUzETMRgAEA/wABgICAgIABgP6AAYCAgP4AgAEAgAGA/IAAAAAAAwAAAAACgAKAAAMADQARAAAzNSEVJREzFSE1MxEhFRE1IRWAAgD9gIABgID+AAGAgICAAYCAgP8AgAGAgIAAAAIAAAAAAgADgAALAA8AADMRIzUzNTMVIRUhGQE1IRWAgICAAQD/AAEAAgCAgICA/gADAICAAAAAAwAA/4ACgAKAAAMABwARAAAVNSEVAREzEQE1ITUhESE1IRECAP4AgAGA/oABgP6AAgCAgIABgAEA/wD/AICAAQCA/YAAAAAAAwAAAAACgAOAAAMABwAPAAAhETMRATUhFQERMxEzFSMRAgCA/oABAP4AgICAAgD+AAIAgID+AAOA/oCA/oAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAQAAP+AAoADAAADAAcACwAPAAAXNSEVJREzESERMxEDNTMVgAGA/gCAAYCAgICAgICAAQD/AAIA/gACgICAAAAFAAAAAAIAA4AAAwAHAAsADwAXAAAhNTMVJTUzFQM1MxU9ATMVAREzETMVIxEBgID/AICAgID+AICAgICAgICAAQCAgICAgP4AA4D+AID/AAAAAAACAAAAAAEAA4AAAwAHAAAzNTMVJREzEYCA/wCAgICAAwD9AAAEAAAAAAKAAoAAAwAHAA0AEQAAAREzERMRMxEhESEVIxEBNTMVAQCAgID9gAEAgAEAgAEAAQD/AP8AAgD+AAKAgP4AAgCAgAACAAAAAAKAAoAAAwAJAAAhETMRIREhFSERAgCA/YACAP6AAgD+AAKAgP4AAAQAAAAAAoACgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgAADAAD/gAKAAoAAAwAPABMAAAERMxEBETMVMxUjFSEVIRETNSEVAgCA/YCAgIABgP6AgAEAAQABAP8A/oADAICAgID/AAKAgIAAAAAAAwAA/4ACgAKAAAMABwATAAAZATMZATUhFRMRITUhNSM1MzUzEYABAID+gAGAgICAAQABAP8AAQCAgP2AAQCAgICA/QAAAAAAAwAAAAACgAKAAAMACwAPAAABNTMVAREzFTMVIxETNSEVAgCA/YCAgICAAQABgICA/oACgICA/oACAICAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADE1IRU9ATMVJTUhFSU1MxU9ASEVAgCA/gABgP4AgAIAgICAgICAgICAgICAgIAAAgAAAAABgAOAAAMADwAAITUzFSURIzUzETMRMxUjEQEAgP8AgICAgICAgIABgIABAP8AgP6AAAACAAAAAAKAAoAAAwAJAAA1ETMRFTUhETMRgAGAgIACAP4AgIACAP2AAAAAAAUAAAAAAoACgAADAAcACwAPABMAACE1MxUlNTMVMzUzFSURMxEhETMRAQCA/wCAgID+AIABgICAgICAgICAgAGA/oABgP6AAAIAAAAAAoACgAADAA0AADURMxEVNTMRMxEzETMRgICAgICAAgD+AICAAQD/AAIA/YAAAAAJAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAADE1MxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgAAAAwAA/4ACgAKAAAMABwAPAAAXNSEVAREzEQE1ITUhETMRgAGA/gCAAYD+gAGAgICAgAGAAYD+gP8AgIABgP2AAAMAAAAAAoACgAAHAAsAEwAAMTUzNTMVIRUBNTMVPQEhNSEVIxWAgAGA/oCA/oACgICAgICAAQCAgICAgICAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJREzEQE1MxU1ETMZATUhFQEAAQD+gID/AICAAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAQAAAAAAgAOAAAMAADERMxGAA4D8gAAABQAAAAACAAOAAAMABwALAA8AEwAAMTUhFTURMxkBNTMVJREzEQE1IRUBAICA/wCA/oABAICAgAEA/wABAICAgAEA/wABAICAAAAAAAQAAAKAAwADgAADAAcACwAPAAARNTMVITUhFSU1IRUhNTMVgAEAAQD+AAEAAQCAAoCAgICAgICAgIAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAMAAAAAAgADAAADAAcACwAAMzUhFSURMxkBNSEVgAGA/gCAAYCAgIACAP4AAgCAgAAAAAACAAAAAAIAAwAADwATAAAxNTMRIzUzNTMVMxUjESEVATUzFYCAgICAgAEA/wCAgAEAgICAgP8AgAKAgIAAAAAABQAAAQABgAKAAAMABwALAA8AEwAAETUzFTM1MxUlNTMVJTUzFTM1MxWAgID/AID/AICAgAEAgICAgICAgICAgICAAAAFAAAAAAKAA4AAEwAXABsAHwAjAAAhNSM1MzUjNTM1MxUzFSMVMxUjFQE1MxUzNTMVJTUzFSE1MxUBAICAgICAgICAgP8AgICA/gCAAYCAgICAgICAgICAgAKAgICAgICAgICAAAAAAAIAAAAAAIADgAADAAcAADERMxEDETMRgICAAYD+gAIAAYD+gAAAAAAFAAD/gAKAAwAABwALAA8AEwAbAAAFNSM1IRUjFRM1MxUhETMRATUzFSU1MzUzFTMVAQCAAYCAgID9gIABgID+AICAgICAgICAAQCAgAGA/oABAICAgICAgIAAAAMAAAAAAwADgAAHAAsADwAAAREhFSMVMxUXESERBxEhEQEAAQCAgID+AIADAAEAAYCAgICAAoD9gIADgPyAAAABAAABAAGAAwAABwAAGQEhNSE1IREBAP8AAYABAAEAgID+AAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAITUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFQEAgICA/gCAgID+AICAgP8AgICA/wCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAQAAAIACgAGAAAUAACU1ITUhEQIA/gACgICAgP8AAAABAIABAAIAAYAAAwAAEzUhFYABgAEAgIAAAAAAAwAAAAADAAOAAAUADQARAAABESERIxUFNSM1MxEhEQcRIREBAAEAgAEAgID+AIADAAEAAYD/AICAgIABgP2AgAOA/IAAAAAAAQAAAwACgAOAAAMAABE1IRUCgAMAgIAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAIAAP+AAoADAAADAA8AABU1IRUBESE1IREzESEVIRECgP6A/wABAIABAP8AgICAAQABAIABAP8AgP8AAAIAAAIAAQADgAAFAAkAABkBMxUzFQM1MxWAgICAAgABAICAAQCAgAABAAACAAEAA4AABwAAETUzNSM1IRGAgAEAAgCAgID+gAAAAAABAYADAAKAA4AAAwAAATUhFQGAAQADAICAAAAAAQAA/4ACgAMAAAkAABURMxEhETMRIRWAAYCA/gCAA4D9gAKA/QCAAAMAAAAAAoADAAADAA0AEQAAETUzFRMRIzUzNSM1IREzETMRgICAgIABAICAAgCAgP4AAYCAgID9AAMA/QAAAAABAAABgACAAgAAAwAAETUzFYABgICAAAACAID/gAIAAIAAAwAHAAAXNSEVPQEzFYABAICAgICAgIAAAAABAAACgACAA4AAAwAAGQEzEYACgAEA/wAAAAAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAoAAAAAAoACgAADAAcACwAPABMAFwAbAB8AIwAnAAAxNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVgICA/wCAgID/AICAgP4AgICA/gCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAgAAAAAAoADgAADAAkADQARABUAGQAdACEAADE1MxUhETMVMxUlETMRJTUzFSU1MxU1ETMRJREzESU1MxWAAQCAgP4AgAEAgP6AgID+AIABgICAgAEAgICAAQD/AICAgICAgIABAP8AgAEA/wCAgIAAAAAABwAAAAACgAOAAAMABwANABEAFQAZAB0AADE1MxU1ETMRBTUjESERATUzFTURMxElETMRJTUzFYCAAQCAAQD+gICA/gCAAYCAgICAAQD/AICAAQD+gAGAgICAAQD/AIABAP8AgICAAAAHAAAAAAKAA4AAAwAHAA0AEQAVAB0AIQAAMTUzFTURMxEFNSMRIREBNTMVNREzESE1MzUjNSERATUzFYCAAQCAAQD+gICA/gCAgAEAAQCAgICAAQD/AICAAQD+gAGAgICAAQD/AICAgP6AAQCAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVPQEzFSERMxkBNTMVPQEzFQM1MxWAAYCA/YCAgICAgICAgICAAQD/AAEAgICAgIABAICAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUBNSEVgAGAgID+gAGA/gABAAIAgID+AAEA/wACAICAAQCAgAAAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUDNSEVgAGAgID+gAGAgAEAAgCAgP4AAQD/AAIAgIABAICAAAUAAAAAAoADgAALAA8AEwAXABsAADERMxUhNTMRIxEhGQE1IRUlNTMVITUzFSU1IRWAAYCAgP6AAYD+AIABgID+AAGAAgCAgP4AAQD/AAIAgICAgICAgICAgAAABQAAAAADAAOAAAsADwAXABsAHwAAMREzFSE1MxEjESERAzUzHQE1ITUhFSMVATUhFSE1MxWAAYCAgP6AgIABAAEAgP6AAQABAIACAICA/gABAP8AAoCAgICAgICAAQCAgICAAAQAAAAAAoADgAALAA8AEwAXAAAxETMVITUzESMRIRkBNSEVATUzFTM1MxWAAYCAgP6AAYD+gICAgAIAgID+AAEA/wACAICAAQCAgICAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUzFYABgICA/oABgP8AgAIAgID+AAEA/wACAICAAQCAgAABAAAAAAKAA4AAFQAAMREzFTM1IzUhFSEVMxUjESEVIREjEYCAgAIA/wCAgAEA/oCAAwCAgICAgID+gIACAP4AAAAAAAcAAP+AAoADgAADAAcACwAPABMAFwAbAAAFNSEVPQEzFSU1IRU9ATMVIREzEQE1MxUlNSEVAQABAID+AAGAgP2AgAGAgP4AAYCAgICAgICAgICAgIACAP4AAYCAgICAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP2AAQACgICAgICAAwCAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP8AAQACgICAgICAAwCAgAAAAAAFAAAAAAKAA4AACQANABEAFQAZAAAxETMVIRUhFSEVATUhFSU1MxUhNTMVJTUhFYABAP8AAgD+AAGA/gCAAYCA/gABgAIAgICAgAIAgICAgICAgICAgAAAAwAAAAACgAOAAAsADwATAAAxESEVIRUhFSEVIRUBNTMVMzUzFQKA/gABAP8AAgD+AICAgAKAgICAgIADAICAgIAAAAACAAAAAAIAA4AACwAPAAAzNTMRIzUhFSMRMxUBNSEVgICAAYCAgP4AAQCAAYCAgP6AgAMAgIAAAAIAgAAAAoADgAALAA8AADM1MxEjNSEVIxEzFQM1IRWAgIABgICAgAEAgAGAgID+gIADAICAAAAABAAAAAACgAOAAAsADwATABcAADM1MxEjNSEVIxEzFQE1MxUhNTMVJTUhFYCAgAGAgID+AIABgID+AAGAgAGAgID+gIACgICAgICAgIAAAAADAAAAAAGAA4AACwAPABMAADE1MxEjNSEVIxEzFQE1MxUzNTMVgIABgICA/oCAgICAAYCAgP6AgAMAgICAgAAAAgAAAAADAAOAAAMAEwAAJREzEQURIzUzESEVIREzFSMRIRUCgID9gICAAgD+gICAAYCAAoD9gIABgIABgID/AID/AIAAAAAABQAAAAADAAOAAAMACwAVABkAHQAAATUzFQERMxEzFSMRITUjNTMRIzUhEQE1IRUhNTMVAQCA/oCAgIABgICAgAEA/gABAAEAgAEAgID/AAMA/wCA/oCAgAGAgP0AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxWAAYD+AIABgID+AAGA/gCAAYCAgICAAgD+AAIA/gACAICAgICAgIAAAAkAAACAAoADAAADAAcACwAPABMAFwAbAB8AIwAAPQEzFSE1MxUlNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgICAgICAgICAgICAgICAgICAgICAgICAgAADAAAAAAKAA4AAAwANABcAAAERMxEBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAAGA/oD/AIACgP4AgICAAgCAgID9gAAAAAAEAAAAAAKAA4AAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP2AAQCAgIACAP4AAgD+AAKAgIAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID/AAEAgICAAgD+AAIA/gACgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUzFSE1MxUlNSEVgAGA/gCAAYCA/YCAAYCA/gABgICAgAGA/oABgP6AAgCAgICAgICAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNTMVMzUzFYABgP4AgAGAgP4AgICAgICAAgD+AAIA/gACgICAgIAAAAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhETMRATUzFTM1MxUlNTMVITUzFQE1IRUBAID/AICAgP4AgAGAgP2AAQABgP6AAYCAgICAgICAgIABAICAAAAAAAMAAP+AAoADAAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YADgP8AgP8AgIAAAAAEAAAAAAKAA4AAAwANABEAFQAAPQEzHQE1ITUhNSE1MxEBNSEVATUhFYABgP6AAYCA/gABgP4AAQCAgICAgICAgP4AAgCAgAEAgIAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQM1IRWAAYD+gAGAgP4AAYCAAQCAgICAgICAgP4AAgCAgAEAgIAAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAPQEzHQE1ITUhNSE1MxEBNSEVJTUzFSE1MxUlNSEVgAGA/oABgID+AAGA/gCAAYCA/gABgICAgICAgICA/gACAICAgICAgICAgIAAAAAGAAAAAAMAA4AAAwANABEAGQAdACEAAD0BMx0BNSE1ITUhNTMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+gAGAgP2AgAEAAQCA/oABAAEAgICAgICAgICA/gACgICAgICAgIABAICAgIAAAAAFAAAAAAKAA4AAAwANABEAFQAZAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVMzUzFYABgP6AAYCA/gABgP6AgICAgICAgICAgID+AAIAgIABAICAgIAAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1MxWAAYD+gAGAgP4AAYD/AICAgICAgICAgP4AAgCAgAEAgIAAAAQAAAAAAoACgAADABUAGQAdAAA9ATMdATUzNSM1MzUzFTM1MxEhFSEVATUzFTM1MxWAgICAgICA/wABAP4AgICAgICAgICAgICAgP8AgIACAICAgIAAAAAHAAD/gAKAAwAAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAYD+gAEAgICAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQE1IRWAAgD9gIABgID+AAGA/gABAICAgAGAgID/AIABgICAAQCAgAAAAAAEAAAAAAKAA4AAAwANABEAFQAAMzUhFSURMxUhNTMRIRURNSEVAzUhFYACAP2AgAGAgP4AAYCAAQCAgIABgICA/wCAAYCAgAEAgIAABgAAAAACgAOAAAMADQARABUAGQAdAAAzNSEVJREzFSE1MxEhFRE1IRUlNTMVITUzFSU1IRWAAgD9gIABgID+AAGA/gCAAYCA/gABgICAgAGAgID/AIABgICAgICAgICAgIAAAAUAAAAAAoADgAADAA0AEQAVABkAADM1IRUlETMVITUzESEVETUhFQE1MxUzNTMVgAIA/YCAAYCA/gABgP6AgICAgICAAYCAgP8AgAGAgIABAICAgIAAAAACAAAAAAEAA4AAAwAHAAAzETMRATUhFYCA/wABAAKA/YADAICAAAAAAgAAAAABAAOAAAMABwAAMREzEQM1IRWAgAEAAoD9gAMAgIAABAAAAAACgAOAAAMABwALAA8AACERMxEBNTMVITUzFSU1IRUBAID+gIABgID+AAGAAoD9gAKAgICAgICAgAAAAAMAgAAAAgADgAADAAcACwAAIREzEQE1MxUzNTMVAQCA/wCAgIACgP2AAwCAgICAAAQAAAAAAwADgAADAA8AEwAXAAAhETMRIREzFSE1IRUjFSEZATUhFSE1MxUCAID9gIABAAEAgP6AAQABAIACAP4AAwCAgICA/gADAICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQE1IRWAAYD+AIABgID+AAGA/gABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVAzUhFYABgP4AgAGAgP4AAYCAAQCAgIABgP6AAYD+gAGAgIABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxUlNSEVgAGA/gCAAYCA/gABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgICAgICAgICAgAAHAAAAAAMAA4AAAwAHAAsADwAXABsAHwAAMzUhFSURMxEhETMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+AIABgID9gIABAAEAgP6AAQABAICAgIABgP6AAYD+gAIAgICAgICAgAEAgICAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1IRUBNTMVMzUzFYABgP4AgAGAgP4AAYD+gICAgICAgAGA/oABgP6AAYCAgAEAgICAgAAAAwAAAIACgAMAAAMABwALAAAlNTMVATUhFQE1MxUBAID+gAKA/oCAgICAAQCAgAEAgIAAAAMAAAAAAoACgAADAA0AFwAAATUzFQE1IxEzETMVIRU1ESM1ITUhFTMRAQCA/wCAgIABAID/AAGAgAEAgID/AIABgP8AgICAAQCAgID+gAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID9gAEAgAIA/gCAgAIA/YADAICAAAADAAAAAAKAA4AAAwAJAA0AADURMxEVNSERMxEBNSEVgAGAgP8AAQCAAgD+AICAAgD9gAMAgIAAAAUAAAAAAoADgAADAAkADQARABUAADURMxEVNSERMxEBNTMVITUzFSU1IRWAAYCA/YCAAYCA/gABgIABgP6AgIABgP4AAoCAgICAgICAAAAABAAAAAACgAOAAAMACQANABEAADURMxEVNSERMxEBNTMVMzUzFYABgID+AICAgIACAP4AgIACAP2AAwCAgICAAAQAAP+AAoADgAADAAcADwATAAAXNSEVAREzEQE1ITUhETMRATUhFYABgP4AgAGA/oABgID9gAEAgICAAYABgP6A/wCAgAGA/YADAICAAAAAAwAA/4ACgAOAAAMABwATAAAlETMRATUhFQERMxEzFSMRIRUhFQIAgP6AAQD+AICAgAGA/oCAAYD+gAGAgID9gAQA/oCA/wCAgAAAAAUAAP+AAoADgAADAAcADwATABcAABc1IRUBETMRATUhNSERMxEBNTMVMzUzFYABgP4AgAGA/oABgID+AICAgICAgAGAAYD+gP8AgIABgP2AAwCAgICAAAACAAAAAAKAA4AAAwATAAA1ETMRFTUzESM1IRUhFTMVIxEhFYCAgAIA/wCAgAEAgAKA/YCAgAKAgICAgP6AgAAABQAAAAACgAKAAAMABwALAA8AGwAAMzUzFTM1IRUlETMZATUzFRkBMxUzNSM1IREhFYCAgAEA/YCAgICAgAEA/wCAgICAgAGA/oABgICA/oABgICAgP6AgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNTMVMzUzFQEAgP8AgICA/gCAAYCA/gCAgIABgP6AAYCAgICAgICAgIABAICAgIAAAAABAAABgAMAAgAAAwAAETUhFQMAAYCAgAACAAACAAEAA4AAAwAHAAAZATMZATUzFYCAAgABAP8AAQCAgAACAAACAAEAA4AAAwAHAAARNTMVNREzEYCAAgCAgIABAP8AAAACAAD/gAEAAQAAAwAHAAAVNTMVNREzEYCAgICAgAEA/wAAAAACAAACAAEAA4AAAwAHAAATNTMVJREzEYCA/wCAAgCAgIABAP8AAAAABAAAAgACAAOAAAMABwALAA8AABkBMxEzETMRATUzFTM1MxWAgID/AICAgAIAAQD/AAEA/wABAICAgIAABAAAAgACAAOAAAMABwALAA8AABE1MxUzNTMVJREzETMRMxGAgID/AICAgAIAgICAgIABAP8AAQD/AAAABAAA/4ACAAEAAAMABwALAA8AABU1MxUzNTMVJREzETMRMxGAgID/AICAgICAgICAgAEA/wABAP8AAAAAAQAAAAABgAMAAAsAADMRIzUzETMRMxUjEYCAgICAgAGAgAEA/wCA/oAAAAABAAABgAEAAoAAAwAAGQEhEQEAAYABAP8AAAAAAwAAAAACgACAAAMABwALAAAxNTMVMzUzFTM1MxWAgICAgICAgICAgAAAAAADAAAAAAEAAYAAAwAHAAsAADM1MxUlNTMVPQEzFYCA/wCAgICAgICAgICAAAMAAAAAAQABgAADAAcACwAAMTUzFT0BMxUlNTMVgID/AICAgICAgICAgAAAAwAAAAACgAOAAAMAFwAbAAAhNSEVJTUjNTM1IzUzNTMVIRUhFSEVIRURNSEVAQABgP4AgICAgIABAP8AAQD/AAGAgICAgICAgICAgICAgAKAgIAAAgAAAgAEgAOAAAcAEwAAExEjNSEVIxEhESERIxEjFSM1IxGAgAGAgAEAAoCAgICAAgABAICA/wABgP6AAQCAgP8AAAAAACABhgABAAAAAAAAASUCTAABAAAAAAABAAkDhgABAAAAAAACAAcDoAABAAAAAAADABEDzAABAAAAAAAEABEEAgABAAAAAAAFAAsELAABAAAAAAAGAAkETAABAAAAAAAHAGMFHgABAAAAAAAIABYFsAABAAAAAAAJAAUF0wABAAAAAAAKASUIJQABAAAAAAALAB8JiwABAAAAAAAMABEJzwABAAAAAAANACgKMwABAAAAAAAOAC4KugABAAAAAAATABsLIQADAAEECQAAAkoAAAADAAEECQABABIDcgADAAEECQACAA4DkAADAAEECQADACIDqAADAAEECQAEACID3gAD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IgAgAGYAbwBuAHQAIABpAHMAIAB1AG4AZABlAHIAIABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAATABpAGMAZQBuAHMAZQAgACgAUwBoAGEAcgBlACAAQQBsAGkAawBlACkALgANAAoADQAKAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAcwB0AHkAbABlACAAdwBhAHMAIABtAGEAZABlACAAYgB5ACAATgBvAHQAYwBoAC4ADQAKAA0ACgBUAGgAZQAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGcAYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAE0AbwBqAGEAbgBnACAAUwBwAGUAYwBpAGYAaQBjAGEAdABpAG8AbgBzAC4AAFRoaXMgIk1pbmVjcmFmdCIgZm9udCB3YXMgYWRhcHRlZCBpbnRvIFRydWVUeXBlIGZpbGUgYnkgbWUgKERqRENIKS4NCg0KVGhpcyAiTWluZWNyYWZ0IiBmb250IGlzIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgTGljZW5zZSAoU2hhcmUgQWxpa2UpLg0KDQpUaGUgIkRqRENIIiBuYW1lIGlzIG93biBieSBtZSAoZGpkY2guY29tKS4NCg0KVGhlICJNaW5lY3JhZnQiIGZvbnQgc3R5bGUgd2FzIG1hZGUgYnkgTm90Y2guDQoNClRoZSAiTWluZWNyYWZ0IiBnYW1lIGlzIG93biBieSBNb2phbmcgU3BlY2lmaWNhdGlvbnMuAABoAHQAdABwADoALwAvAGYAbwBuAHQAcwB0AHIAdQBjAHQALgBmAG8AbgB0AHMAaABvAHAALgBjAG8AbQAvAABodHRwOi8vZm9udHN0cnVjdC5mb250c2hvcC5jb20vAABoAHQAdABwADoALwAvAGQAagBkAGMAaAAuAGMAbwBtAC8AAGh0dHA6Ly9kamRjaC5jb20vAABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAAQQB0AHQAcgBpAGIAdQB0AGkAbwBuACAAUwBoAGEAcgBlACAAQQBsAGkAawBlAABDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIFNoYXJlIEFsaWtlAABoAHQAdABwADoALwAvAGMAcgBlAGEAdABpAHYAZQBjAG8AbQBtAG8AbgBzAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBiAHkALQBzAGEALwAzAC4AMAAvAABodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvAABNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQAATWluZWNyYWZ0IGlzIGp1c3QgYXdlc29tZSAhAAAAAgAAAAAAAABlADMAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQCjAIQAhQC9AJYA6ACOAIsAnQCpAKQBBACKANoAgwCTAQUBBgCNAQcAiADDAN4BCACeAKoA9QD0APYAogCtAMkAxwCuAGIAYwCQAGQAywBlAMgAygDPAMwAzQDOAOkAZgDTANAA0QCvAGcA8ACRANYA1ADVAGgA6wDtAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA7ADuALoAsACxALsAswC2ALcAxAEJALQAtQDFAIIAhwCrAL4AvwEKAIwGZ2x5cGgxB3VuaTAwMEQHdW5pMDBBRAd1bmkwMEIyB3VuaTAwQjMHdW5pMDBCNQd1bmkwMEI5DXF1b3RlcmV2ZXJzZWQERXVybwAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAEAzwABAAQAAAACAAAAAAABAAAAAMw9os8AAAAAyO86mAAAAADI8I+a",0),new android.os.Environment.getExternalStorageDirectory()+"/minecraft.ttf");
font=new android.graphics.Typeface.createFromFile(new android.os.Environment.getExternalStorageDirectory()+"/minecraft.ttf");
function writeFileFromByteArray(byteArray,path){
	var fontFile=new java.io.File(path);
	if(fontFile.exists())
		fontFile.delete();
	fontFile.createNewFile();
	var fontStream=new java.io.FileOutputStream(fontFile);
	fontStream.write(byteArray);
	fontStream.close();
	}
