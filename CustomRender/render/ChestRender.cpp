#include "com/mojang/minecraftpe/client/renderer/BlockTessellator.h"

bool BlockTessellator::tessellateChestInWorld(Block& block, TilePos const& pos){
	useForcedUV = true;
	int x = pos.x, y = pos.y, z = pos.z;
	
	forcedUV = block->getTexture(0, 0);
	
	//Main box
	setRenderBounds(0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375);
	tessellateBlockInWorld(block, pos);
	
	//Lock
	setRenderBounds(0, 0.375, 0.4375, 0.0625, 0.635, 0.5625);
	tessellateBlockInWorld(block, pos);
	
	useForcedUV = false;
}
