ServerEvents.recipes(e => {
    //ITEM PIPE
    e.shaped('8x pipez:item_pipe', [
        '   ',
        'IDI',
        '   '
    ], {
        I: '#forge:ingots/constantan',
        D: 'minecraft:dropper',
    }).id(`kjs:crafting/pipez/constantan_itemduct`)

    e.remove({output: 'pipez:item_pipe'})

    
    //ENERGY PIPE
    e.shaped('8x pipez:energy_pipe', [
        '   ',
        'IRI',
        '   '
    ], {
        I: '#forge:ingots/invar',
        R: 'mekanism:alloy_infused'
    }).id(`kjs:crafting/pipez/invar_fluxduct`)

    e.remove({output: 'pipez:energy_pipe'})


    //FLUID PIPE
    e.shaped('8x pipez:fluid_pipe', [
        '   ',
        'IBI',
        '   '
    ], {
        I: '#forge:ingots/steel',
        B: 'minecraft:iron_ingot'
    }).id(`kjs:crafting/pipez/steel_fluid_pipe`)

    e.remove({output: 'pipez:fluid_pipe'})

    
    //GAS PIPE
    e.shaped('8x pipez:gas_pipe', [
        '   ',
        'SGS',
        '   '
    ], {
        S: '#forge:ingots/silver',
        G: '#forge:glass'
    }).id(`kjs:crafting/pipez/silver_gas_pipe`)

    e.remove({output: 'pipez:gas_pipe'})

    
    //Upgrades
    e.shaped('pipez:improved_upgrade', [
        'GAG',
        'AUA',
        'GAG'
    ], {
        A: 'mekanism:alloy_infused',
        G: '#forge:ingots/gold',
        U: 'pipez:basic_upgrade'
    }).id(`kjs:crafting/pipez/improved_upgrade`)

    e.remove({output: 'pipez:improved_upgrade'})
    
})
