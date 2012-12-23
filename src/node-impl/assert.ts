///<reference path='../pratphall.ts' />
///<reference path='node.d.ts' />

module Pratphall {

    export import assert = module('assert');

    export function loadAssert(): Assert {
        return assert;
    }
}