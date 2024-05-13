ServerEvents.recipes(event => {

    event.remove({ output: 'vs_eureka:engine' })
    event.shaped('vs_eureka:engine', [
        'AAA',
        'CED',
        'BBB'
    ], {
        A: 'tfc:rock/raw/*',
        B: 'tfc:rock/smooth/*',
        C: 'gtceu:wrought_iron_ingot',
        D: 'forge:glass_panes',
        E: 'gtceu:steel_brick_casing'
        
    })
    
    event.remove({ output: 'vs_eureka:ballast' })
    event.shaped('', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'tfc:rock/raw/*',
        B: 'tfc:rock/cobbled/*'
    })
    
    event.remove({ output: 'vs_eureka:oak_ship_helm' })
    event.shaped('', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:stick',
        B: 'tfc:wood/planks/oak_fence',
        C: 'minecraft:gold_ingot',
        D: 'tfc:wood/planks/oak_slab'
    })
})