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
})