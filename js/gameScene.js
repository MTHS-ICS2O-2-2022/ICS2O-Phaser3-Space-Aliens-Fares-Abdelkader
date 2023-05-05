/* global Phaser */

// Copyright (c) 2023 Fares.Abdelkader
//
// Created by: Fares.Abdelkader
// Created on: Apr 2023
// This is the Game Scene

/**
 * This class is the Menu Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "gameScene" })
  }

  /**
   * This method is the init.
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * This method is the preload.
   */
  preload() {
    console.log("game Scene")
  }

  /**
   * This method is the create.
   */
  create(data) {
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // pass
  }
}

export default GameScene