///<reference path='all.d.ts' />

interface Reflector {
    //static export(): string; http://typescript.codeplex.com/workitem/80

}

class Reflection {
    //static export(): string; http://typescript.codeplex.com/workitem/80
    static getModifierNames(modifiers: number): string[];
}

class ReflectionClass implements Reflector {
    static IS_IMPLICIT_ABSTRACT: number;
    static IS_EXPLICIT_ABSTRACT: number;
    static IS_FINAL: number;

    name: string;

    constructor(argument: string);
    constructor(argument: Object);

    getConstant(name: string): any;
    getConstants(): Pct.PhpAssocArray;
    getConstructor(): ReflectionMethod;
    getDefaultProperties(): Pct.PhpAssocArray;
    getDocComment(): string;
    getEndLine(): number;
    getExtension(): ReflectionExtension;
    getExtensionName(): string;
    getFileName(): string;
    getInterfaceNames(): string[];
    getInterfaces(): Pct.PhpAssocArray;
    getMethod(name: string): ReflectionMethod;
    getMethods(filter?: number): ReflectionMethod[];
    getModifiers(): number;
    getName(): string;
    getNamespaceName(): string;
    getParentClass(): ReflectionClass;
    getProperties(filter?: number): ReflectionProperty[];
    getProperty(name: string): ReflectionProperty;
    getShortName(): string;
    getStartLine(): number;
    getStaticProperties(): Pct.PhpAssocArray;
    getStaticPropertyValue(name: string): any;
    getTraitAliases(): Pct.PhpAssocArray;
    getTraitNames(): string[];
    getTraits(): Pct.PhpAssocArray;
    hasConstant(name: string): bool;
    hasMethod(name: string): bool;
    hasProperty(name: string): bool;
    implementsInterface(interface_: string): bool;
    inNamespace(): bool;
    isAbstract(): bool;
    isCloneable(): bool;
    isFinal(): bool;
    isInstance(object: any): bool;
    isInstantiable(): bool;
    isInterface(): bool;
    isInternal(): bool;
    isIterateable(): bool;
    isSubclassOf(class_: string): bool;
    isTrait(): bool;
    isUserDefined(): bool;
    newInstance(...args: any[]): any;
    newInstanceArgs(args?: any[]): any;
    newInstanceWithoutConstructor(): any;
    setStaticPropertyValue(name: string, value: any);
}

class ReflectionZendExtension implements Reflector {
    name: string;

    constructor(name: string);
    getAuthor(): string;
    getCopyright(): string;
    getName(): string;
    getURL(): string;
    getVersion(): string;
}

class ReflectionExtension implements Reflector {
    name: string;

    constructor(name: string);
    getClasses(): Pct.PhpAssocArray;
    getClassNames(): string[];
    getConstants(): Pct.PhpAssocArray;
    getDependencies(): Pct.PhpAssocArray;
    getFunctions(): Pct.PhpAssocArray;
    getINIEntries(): Pct.PhpAssocArray;
    getName(): string;
    getVersion(): string;
    info();
    isPersistent(): bool;
    isTemporary(): bool;
}

class ReflectionFunctionAbstract implements Reflector {
    name: string;

    getClosureThis(): any;
    getDocComment(): string;
    getEndLine(): number;
    getExtension(): ReflectionExtension;
    getExtensionName(): string;
    getFileName(): string;
    getName(): string;
    getNamespaceName(): string;
    getNumberOfParameters(): number;
    getNumberOfRequiredParameters(): number;
    getParameters(): ReflectionParameter[];
    getShortName(): string;
    getStartLine(): number;
    getStaticVariables(): any[]; //TODO: figure out
    inNamespace(): bool;
    isClosure(): bool;
    isDeprecated(): bool;
    isInternal(): bool;
    isUserDefined(): bool;
    returnsReference(): bool;
}

class ReflectionFunction extends ReflectionFunctionAbstract {
    static IS_DEPRECATED: number;

    name: string;

    constructor(name: any);
    getClosure(): Closure;
    invoke(...parameter: any[]): any;
    invokeArgs(args: any[]): any;
    isDisabled(): bool;
}

class ReflectionMethod extends ReflectionFunctionAbstract {
    static IS_STATIC: number;
    static IS_PUBLIC: number;
    static IS_PROTECTED: number;
    static IS_PRIVATE: number;
    static IS_ABSTRACT: number;
    static IS_FINAL: number;

    name: string;
    class_: string;

    constructor(class_: string, name: string);
    constructor(class_: Object, name: string);
    getClosure(object?: any): Closure;
    getDeclaringClass(): ReflectionClass;
    getModifiers(): number;
    getPrototype(): ReflectionMethod;
    invoke(object: any, ...parameter: any[]): any;
    invokeArgs(object: any, args: any[]): any;
    isAbstract(): bool;
    isConstructor(): bool;
    isDestructor(): bool;
    isFinal(): bool;
    isPrivate(): bool;
    isProtected(): bool;
    isPublic(): bool;
    isStatic(): bool;
    setAccessible(accessible: bool);
}

class ReflectionObject extends ReflectionClass {
}

class ReflectionParameter implements Reflector {
    name: string;

    constructor(function_: string, parameter: string);
    allowsNull(): bool;
    canBePassedByValue(): bool;
    getClass(): ReflectionClass;
    getDeclaringClass(): ReflectionClass;
    getDeclaringFunction(): ReflectionFunction;
    getDefaultValue(): any;
    getName(): string;
    getPosition(): number;
    isArray(): bool;
    isDefaultValueAvailable(): bool;
    isOptional(): bool;
    isPassedByReference(): bool;
}

class ReflectionProperty implements Reflector {
    static IS_STATIC: number;
    static IS_PUBLIC: number;
    static IS_PROTECTED: number;
    static IS_PRIVATE: number;

    name: string;
    class_: string;

    constructor(class_: string, name: string);
    constructor(class_: Object, name: string);
    getDeclaringClass(): ReflectionClass;
    getDocComment(): string;
    getModifiers(): number;
    getName(): string;
    getValue(object?: any): any;
    isDefault(): bool;
    isPrivate(): bool;
    isProtected(): bool;
    isPublic(): bool;
    isStatic(): bool;
    setAccessible(accessible: bool);
    setValue(value: any);
    setValue(object: any, value: any);
}

class ReflectionException extends Exception { }