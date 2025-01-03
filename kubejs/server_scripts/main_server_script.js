// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerAE2ItemTags(event)
    registerAlekiShipsItemTags(event)
    registerAsticorCartsItemTags(event)
    registerBeneathItemTags(event)
    registerComputerCraftItemTags(event)
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerCreateLowHeatedItemTags(event)
    registerExtendedAE2ItemTags(event)
    registerFirmaCivItemTags(event)
    registerFirmaLifeItemTags(event)
    registerFTBQuestsItemTags(event)
    registerGregTechItemTags(event)
    registerMegaCellsItemTags(event)
    registerMinecraftItemTags(event)
    registerMoreRedItemTags(event)
    // registerHotOrNotItemTags(event)
    registerRailWaysItemTags(event)
    registerTFCItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerAE2BlockTags(event)
    registerAlekiShipsBlockTags(event)
    registerAsticorCartsBlockTags(event)
    registerBeneathBlockTags(event)
    registerComputerCraftBlockTags(event)
    registerCreateBlockTags(event)
    registerCreateAdditionsBlockTags(event)
    registerExtendedAE2BlockTags(event)
    registerFirmaCivBlockTags(event)
    registerFirmaLifeBlockTags(event)
    registerFTBQuestsBlockTags(event)
    registerGregTechBlockTags(event)
    registerMegaCellsBlockTags(event)
    registerMinecraftBlockTags(event)
    registerMoreRedBlockTags(event)
    // registerHotOrNotBlockTags(event)
    registerRailWaysBlockTags(event)
    registerTFCBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerCreateFluidTags(event)
    registerCreateAdditionsFluidTags(event)
    registerFirmaLifeBlockTags(event)
    registerTFCFluidTags(event)
})

/**
 * Событие регистрации биом-тегов.
 */
ServerEvents.tags('worldgen/biome', event => {
    registerTFCBiomeTags(event)
    registerCreatePickyWheelsBiomeTags(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerBeneathPlacedFeatures(event)
    registerFirmaLifePlacedFeatures(event)
    registerTFCPlacedFeatures(event)
})

/**
 * Событие регистрации датапаков (Здесь можно регистрировать теги, данные, рецепты, общий метод короче).
 * Срабатывает до инициализации рецептов, но после тегов.
 */
ServerEvents.highPriorityData(event => {
    registerComputerCraftData(event)
})

/**
 * Событие регистрации датапаков для TFC (Здесь можно регистрировать теги, данные, рецепты, общий метод короче).
 * Срабатывает до инициализации рецептов, но после тегов.
 */
TFCEvents.data(event => {
    registerTFCDataForGregTech(event)
    registerTFCDataForTFC(event)
    registerTFCDataForTreeTap(event)
    registerTFCDataForWaterFlasks(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков и тегов.
 */
ServerEvents.recipes(event => {
    registerAE2Recipes(event)
    registerAdvancedPeripheralsRecipes(event)
    registerAlekiShipsRecipes(event)
    registerAsticorCartsRecipes(event)
    registerAE2InsertExportCardRecipes(event)
    registerAE2NetworkAnalyzerRecipes(event)
    registerAE2WTLibRecipes(event)
    registerComputerCraftRecipes(event)
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerCreateLowHeatedRecipes(event)
    registerCreateConnectedRecipes(event)
    registerExtendedAE2Recipes(event)
    registerFirmaCivRecipes(event)
    registerFirmaLifeRecipes(event)
    registerFTBQuestsRecipes(event)
    registerGregTechRecipes(event)
    // registerHotOrNotRecipes(event)
    registerMERequesterRecipes(event)
    registerMegaCellsRecipes(event)
    registerMinecraftRecipes(event)
    registerMoreRedRecipes(event)
    registerRailWaysRecipes(event)
    registerStorageDrawersRecipes(event)
    registerTfceaRecipes(event)
    registerTFCRecipes(event)
    registerTFGRecipes(event)
    registerTFCGroomingStationRecipes(event)
    registerToolBeltRecipes(event)
    registerTreeTapRecipes(event)
    registerWaterFlasksRecipes(event)
})

/**
 * Событие регистрации лут-тейблов.
 * Срабатывает до инициализации рецептов, но после датапаков и тегов.
 */
LootJS.modifiers((event) => {})

/**
 * Событие регистрации рудных жил GregTech.
*/
GTCEuServerEvents.oreVeins(event => {
    registerGregTechOreVeins(event)
})

/**
 * Событие регистрации жидкостных жил GregTech.
*/
GTCEuServerEvents.fluidVeins(event => {
    registerGregTechFluidVeins(event)
})