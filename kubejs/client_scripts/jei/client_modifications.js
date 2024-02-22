JEIEvents.hideItems(e => {
    e.hide([
      /ae2:facade/,

      //Mob Grinding Utils
      'mob_grinding_utils:solid_xp_block',
      'mob_grinding_utils:xpsolidifier',
      'mob_grinding_utils:jumbo_tank',
      'mob_grinding_utils:entity_conveyor',
      'mob_grinding_utils:dark_oak_stone',
      'mob_grinding_utils:dreadful_dirt',
      'mob_grinding_utils:delightful_dirt',
      'mob_grinding_utils:gm_chicken_feed_cursed',
      'mob_grinding_utils:nutritious_chicken_feed',
      'mob_grinding_utils:null_sword',
      'mob_grinding_utils:rotten_egg',
      'mob_grinding_utils:golden_egg',
      'mob_grinding_utils:solid_xp_baby',
      'mob_grinding_utils:solid_xp_mould_blank',
      'mob_grinding_utils:solid_xp_mould_baby',
      'mob_grinding_utils:monocle',
      'mob_grinding_utils:fan',
      'mob_grinding_utils:spikes',
      'mob_grinding_utils:entity_spawner',
      'mob_grinding_utils:fan_upgrade_width',
      'mob_grinding_utils:fan_upgrade_height',
      'mob_grinding_utils:fan_upgrade_speed',
      'mob_grinding_utils:xp_solidifier_upgrade',
      'mob_grinding_utils:spawner_upgrade_width',
      'mob_grinding_utils:spawner_upgrade_height',
      'mob_grinding_utils:tinted_glass',
      'mob_grinding_utils:mob_swab',
      'mob_grinding_utils:mob_swab_used',
      'mob_grinding_utils:gm_chicken_feed',

      //Pipez
      'pipez:universal_pipe',
    ])
})

JEIEvents.addItems(e => {
    e.add(Item.of('ae2:facade', '{item:"minecraft:stone"}'))
})
