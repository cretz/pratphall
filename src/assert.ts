///<reference path='pratphall.ts' />
///<reference path='node-impl/assert.ts' />
///<referenceAlternative originalPath='node-impl/assert.ts' conditional='php' path='php-impl/assert.ts' />

module Pratphall {
    export interface Assert {
        fail(actual: any, expected: any, message: string, operator: string): void;
        assert(value: any, message: string): void;
        ok(value: any, message?: string): void;
        equal(actual: any, expected: any, message?: string): void;
        notEqual(actual: any, expected: any, message?: string): void;
        deepEqual(actual: any, expected: any, message?: string): void;
        notDeepEqual(acutal: any, expected: any, message?: string): void;
        strictEqual(actual: any, expected: any, message?: string): void;
        notStrictEqual(actual: any, expected: any, message?: string): void;
        throws(block: any, error?: any, messsage?: string): void;
        doesNotThrow(block: any, error?: any, messsage?: string): void;
        ifError(value: any): void;
    }

    declare function loadAssert(): Assert;
}