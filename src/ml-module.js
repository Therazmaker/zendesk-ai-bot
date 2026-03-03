'use strict';

// ml-module.js
import * as tf from '@tensorflow/tfjs';

class AIModel {
    constructor() {
        this.model = null;
    }

    async initialize() {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({units: 32, activation: 'relu', inputShape: [10]}));
        this.model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

        this.model.compile({
            optimizer: 'adam',
            loss: 'binaryCrossentropy',
            metrics: ['accuracy']
        });
    }

    async train(trainXs, trainYs) {
        const tensorXs = tf.tensor2d(trainXs);
        const tensorYs = tf.tensor2d(trainYs);

        await this.model.fit(tensorXs, tensorYs, {
            epochs: 50,
            batchSize: 32
        });
        
        tensorXs.dispose();
        tensorYs.dispose();
    }

    async predict(inputData) {
        const inputTensor = tf.tensor2d([inputData]);
        const prediction = this.model.predict(inputTensor);
        const result = await prediction.data();
        
        inputTensor.dispose();
        return result[0];
    }
}

export default AIModel;
