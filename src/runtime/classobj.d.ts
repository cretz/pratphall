///<reference path="array.d.ts" />

declare function class_alias(original: string, alias: string, autoload?: bool): bool; //TODO: inform users they have to declare the new one
declare function class_exists(class_name: string, autoload?: bool): bool;
declare function get_called_class(): string;
declare function get_class(object?: any): string;
declare function get_class_methods(class_name: any): string[];
declare function get_class_vars(class_name: string): PhpAssocArray[];
declare function get_declared_classes(): string[];
declare function get_declared_interfaces(): string[];
declare function get_declared_traits(): string[];
declare function get_object_vars(object: any): PhpAssocArray;
declare function get_parent_class(object?: any): string;
declare function interface_exists(interface_name: string, autoload?: bool): bool;
declare function is_a(object: any, class_name: string, allow_string?: bool): bool;
declare function is_subclass_of(object: any, class_name: string, allow_string?: bool): bool;
declare function method_exists(object: any, method_name: string): bool;
declare function property_exists(object: any, property: string): bool;
declare function trait_exists(traitname: string, autoload?: bool): bool;