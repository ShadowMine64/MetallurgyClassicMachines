#pragma once
#include <string>
#include <functional>

class Tessellator;
#include ".../.../.../.../level/BlockPos.h"
#include ".../.../.../.../level/BlockSource.h"
#include ".../.../.../.../level/block/Block.h"
#include ".../.../.../.../phys/Vec3.h"
#include ".../.../.../client/renderer/texture/TextureUVCoordinateSet.h"
#include ".../.../.../client/renderer/texture/TextureUVCoordinateSet.cpp"
#include ".../.../.../.../phys/AABB.h"




class BlockTesselator
{
public:
	bool forcedOpaque; //0
	bool mirror; //1
	BlockSource* blockSource;//4
	TextureUVCoordinateSet forcedUV;//8
	bool useForcedUV;//40
	char filler1[512];//156
	AABB bounds; //672

	bool tessellateInWorld(Block&, const BlockPos&, unsigned char, bool);
	const _occlusion(BlockPos const&);
	unsigned int getLightColor(BlockPos const&);
	bool tessellateBlockInWorld(Block &, BlockPos const&); 
	bool tessellateBlockInWorldFlat(Block &, BlockPos const&, Color const&, BlockOccluder const&);
	bool tessellateBlockInWorldWithAmbienceOcclusion(Block &, BlockPos, Color const&, BlockOccluder const);

	void setRenderBounds(float x1, float y1, float z1, float x2, float y2, float z2){
		bounds = AABB(x1, y1, z1, x2, y2, z2);
	}
	bool tessellateMetalChestInWorld(Block&, TilePos const&);
	bool tessellateCrusherInWorld(Block&, TilePos const&);
}
