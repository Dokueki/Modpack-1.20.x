ServerEvents.recipes(event => {
  event.replaceInput({ 
    mod: 'mcw_tfc_aio', 
    output: '/mcw_tfc_aio:fences\/.*_wired_fence/' 
  },
    'minecraft:iron_bars',
    'createaddition:barbed_wire'
  )
})