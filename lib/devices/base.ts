import { Joycon } from '../joycon.js';
import { EventEmitter } from 'events';
import { setTimeout } from 'timers/promises';
import * as winston from 'winston';
import { Rumble } from '../rumble.js';

export enum ExternalDeviceType {
    RINGCON = 0x20,
    ROULETTE = 0x29
}
export abstract class ExternalDevice extends EventEmitter {
    protected joycon: Joycon;
    protected debugMode = false;

    constructor(joycon: Joycon) {
        super();
        this.joycon = joycon;
    }

    static get deviceId(): ExternalDeviceType {
        return 0 as ExternalDeviceType;
    }

    static get deviceName(): string {
        return 'Not configured';
    }

    async initialize(): Promise<boolean> {
        return true;
    }

    protected get logger(): winston.Logger {
        return this.joycon.logger;
    }

    protected async sendRumbleOnConnected(): Promise<void> {
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x80, 0x78, 0x60, 0x80]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x00, 0x01, 0x3f, 0x72]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x00, 0x01, 0x52, 0x72]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x72, 0x98, 0x61, 0xb2]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x92, 0xf8, 0x63, 0xae]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x00, 0x01, 0x49, 0x6a]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x8e, 0xb8, 0x60, 0xab]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x6c, 0x18, 0x62, 0xb2]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x8e, 0xd8, 0xe0, 0x8a]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x90, 0x18, 0x61, 0x91]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x00, 0x01, 0xc4, 0x46]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x90, 0x78, 0x61, 0x87]));
        this.joycon.sendRumbleSingle(Rumble.fromBuffer([0x8c, 0x18, 0x62, 0x81]));
        this.joycon.sendRumbleSingle(Rumble.defaultRumble);
    }

    disconnect() {}

    dispose(): void {
        return;
    }
}
