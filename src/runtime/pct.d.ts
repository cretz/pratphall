///<reference path='all.d.ts' />

/**
 * Pratphall Compile-Time
 *
 * These are utilities that assist in writing Pratphall code. Many
 * of the utilities are accompanied by extensions that affect the
 * PHP output.
 */
module Pct {

    /**
     * When a class or interface explicitly implements this interface
     * (i.e. not just have a super type that implements it), the type
     * will not be emitted to PHP. It is for use with compile-time
     * only checks for satisfying certain interfaces. This is really
     * helpful for type checking stdClass objects or callbacks. 
     *
     * Note, to define classes or interfaces in external code that still
     * may need to apply to type hints, instanceof checks, etc use the
     * Ambient interface.
     */
    interface CompileTimeOnly {}

    /**
     * When a class or interface explicitly implements this interface
     * (i.e. not just have a super type that implements it), the type
     * will not be emitted to PHP. It is for use with classes or
     * interfaces that may be defined in external libraries but still
     * need to be handled in instanceof checks, type hints, etc.
     *
     * Any items in a .d.ts file (a declaration file) are automatically
     * assumed to be ambient. Similarly any classes, vars, or functions
     * that are prefixed with "declare" are also assumed ambient. 
     * Interfaces outside of declaration files are required to explicitly
     * implement this to be assumed ambient.
     *
     * Note, to define classes or interfaces for compile-time use only,
     * use the CompileTimeOnly interface.
     */
    interface Ambient extends CompileTimeOnly {}

    /**
     * When a class or interface explicitly implements this interface,
     * the type is assumed to use old-style namespaces which are underscores
     * instead of native PHP 5.3+ namespaces. This is only allowed on
     * ambient types, not in compiled code.
     */
    interface OldStyleNamespace extends CompileTimeOnly { }

    /**
     * Simple interface for defining indexers. This interface should not
     * be confused with ArrayAccess which provides runtime support for
     * bracketed index-based lookups.
     */
    interface Indexable extends CompileTimeOnly {
        [index: string]: any;
        [index: number]: any;
    }

    /**
     * Associative array in PHP. Has all features of normal array.
     */
    interface PhpAssocArray extends Array, Indexable, CompileTimeOnly {
        forEach?(callbackfn: (value: any, index: any) => void): void;
    }

    /**
     * Representation of a PHP resource
     */
    interface PhpResource extends CompileTimeOnly { }

    /**
     * Makes anything passed as "by-reference" essentially prefixing
     * an ampersand.
     */
    function byRef(expression: any): any;

    /**
     * Takes the given expression and assumes the last identifier is
     * a variable. This is useful when you have a variable that is 
     * completely capitalized but you want to use it as a variable instead
     * of Pratphall's default which is a const.
     */
    function asVar(id: any): any;

    /**
     * Takes the given expression and assumes it is a constant, avoiding
     * prefixing the dollar sign. This is useful when you have a variable
     * that is actually a constant, but is not all capitalized so Pratphall
     * does not know it is a constant.
     */
    function const(value: any): any;

    /**
     * Handles PHP's declare construct
     */
    function declare(directive: string, value: any, block?: () => void): bool;

    /**
     * This will emit a PHP instanceof check. Usually the regular instanceof
     * operator is preferred. This is useful when the right-hand side of the
     * operator needs to be a string or an expression.
     */
    function isInstance(obj: any, check: any): bool;

    /**
     * Gets the name of the type at compile time, NOT runtime. This means it
     * can output values like "any" or "number". It is best used for class or
     * interface types where it will return a fully-qualified, slash-style PHP
     * type name.
     */
    function typeName(obj: any): string;

    /**
     * Insert PHP break. This is helpful in forEach loop
     */
    function break();

    /**
     * Insert PHP continue. This is helpful in forEach loop
     */
    function continue();

    /**
     * Create a new associative array. An empty array is created if no 
     * parameters are present. Otherwise, the parameter must be an object
     * literal which properly translates.
     */
    function newAssocArray(obj?: Object): PhpAssocArray;

    /**
     * Convert an associative array to a numerically indexed array at compile
     * time. This does NOT emit anything in PHP.
     */
    function toArray(array: PhpAssocArray): any[];

    /**
     * Convert a numerically indexed array to an associative array at compile
     * time. This does NOT emit anything in PHP.
     */
    function toAssocArray(array: any[]): PhpAssocArray;

    /**
     * Unions two arrays like the plus operator in PHP.
     */
    function unionArray(...arrays: any[][]): any[];

    /**
     * Unions two arrays like the plus operator in PHP.
     */
    function unionArray(...arrays: PhpAssocArray[]): PhpAssocArray;

    /**
     * Unions two arrays like the plus operator in PHP.
     */
    function unionArray(...arrays: any[]): PhpAssocArray;

    /**
     * A literal PHP (int) cast
     */
    function castInt(value: any): number;

    /**
     * A literal PHP (bool) cast
     */
    function castBool(value: any): bool;

    /**
     * A literal PHP (float) cast
     */
    function castFloat(value: any): number;

    /**
     * A literal PHP (string) cast
     */
    function castString(value: any): string;

    /**
     * A literal PHP (array) cast returning a compile-time
     * numerically indexed array.
     */
    function castArray(value: any): any[];

    /**
     * A literal PHP (array) cast returning a compile-time
     * associative array.
     */
    function castAssocArray(value: any): PhpAssocArray;

    /**
     * A literal PHP (object) cast
     */
    function castObject(value: any): Object;

    /**
     * A literal PHP (unset) cast
     */
    function castUnset(value: any): undefined;

    /**
     * A literal PHP (binary) cast
     */
    function castBinary(value: any): string;

    /**
     * Strict === false check. Beware "!Pct.isFalse(val)" will
     * not do what you think, it will do !$val === false. Use
     * Pct.isNotFalse for !== false.
     */
    function isFalse(value: any): bool;

    /**
     * Strict !== false check.
     */
    function isNotFalse(value: any): bool;

    /**
     * Support for the PHP error control operator "@".
     */
    function swallowErrors(value: any): any;

    /**
     * Support for the PHP clone keyword.
     */
    function clone(value: any): any;

    /**
     * Advanced try-catch that can support a single catch and/or finally.
     * A standalone try can als be provided.
     */
    interface TryCatch {
        try: () => any;
        catch?: { (e: Exception): any; };
        finally?: () => any;
    }


    /**
     * Advanced try-catch that can support a mulitple catches and/or finally.
     */
    interface TryCatches {
        try: () => any;
        catch: { (e: Exception): any; }[];
        finally?: () => any;
    }

    /**
     * Handle advanced try/catch logic
     */
    function try(val: TryCatch);

    /**
     * Handle advanced try/catch logic
     */
    function try(val: TryCatches);

}