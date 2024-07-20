ServerEvents.recipes(event => {
  event.replaceInput({ output: 'lithiccoins:coin_purse' },
    'tfc:metal/rod/copper',
    '#forge:rods/copper'
  )

  event.replaceInput({ output: 'lithiccoins:stamp_holder' },
    'tfc:metal/rod/brass',
    '#forge:rods/brass'
  )
})
