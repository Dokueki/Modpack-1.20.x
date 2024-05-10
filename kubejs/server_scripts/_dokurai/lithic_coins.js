ServerEvents.recipes(event => {
  event.replaceInput({ output: 'lithiccoins:coin_purse' },
    'tfc:metal/rod/copper',
    '#forge:rods/copper'
  )
})