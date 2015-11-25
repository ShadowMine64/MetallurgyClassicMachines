#include <jni.h>
#include <dlfcn.h>
#include <android/log.h>
#include <stdlib.h>
#include <mcpe.h>
#include <Substrate.h>

bool (*_BlockTessellator$tessellateInWorld)(BlockTessellator*, Block &, BlockPos const&, unsigned char, bool);
bool BlockTessellator$tessellateInWorld(BlockTessellator* tessellate, Block block&, const TilePos& pos, unsigned char idk, bool b){
	switch(block->id){
  		case 235:
    		tessellate->tessellateMetalChestInWorld(block, pos);
			break;
		case 236:
    		tessellate->tessellateMetalChestInWorld(block, pos);
			break;
		case 237:
    		tessellate->tessellateMetalChestInWorld(block, pos);
			break;
		case 238:
    		tessellate->tessellateMetalChestInWorld(block, pos);
			break;
		default:
			return _BlockTessellator$tessellateInWorld(tessellatem, block, pos, b)
	}
}

JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved) {
	MSHookFunction((void*) &BlockTessellator::tessellateInWorld, (void*) &BlockTessellator$tessellateInWorld, (void**)_BlockTessellator$tessellateInWorld);
	return JNI_VERSION_1_2;
}
