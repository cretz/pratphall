///<reference path='all.d.ts' />

function ezmlm_hash(addr: string): number;
function mail(to: string, subject: string, message: string, additional_headers?: string, additional_parameters?: string): bool;