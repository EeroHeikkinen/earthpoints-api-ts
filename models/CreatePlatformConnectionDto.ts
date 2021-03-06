/* tslint:disable */
/* eslint-disable */
/**
 * Earthpoints API
 * Earthpoints API description
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreatePlatformConnectionDto
 */
export interface CreatePlatformConnectionDto {
    /**
     * 
     * @type {string}
     * @memberof CreatePlatformConnectionDto
     */
    userid?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePlatformConnectionDto
     */
    profileId: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePlatformConnectionDto
     */
    platform: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreatePlatformConnectionDto
     */
    emails?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreatePlatformConnectionDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CreatePlatformConnectionDto
     */
    phone?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePlatformConnectionDto
     */
    authToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePlatformConnectionDto
     */
    tokenSecret?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreatePlatformConnectionDto
     */
    authExpiration?: Date;
}

export function CreatePlatformConnectionDtoFromJSON(json: any): CreatePlatformConnectionDto {
    return CreatePlatformConnectionDtoFromJSONTyped(json, false);
}

export function CreatePlatformConnectionDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlatformConnectionDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userid': !exists(json, 'userid') ? undefined : json['userid'],
        'profileId': json['profile_id'],
        'platform': json['platform'],
        'emails': !exists(json, 'emails') ? undefined : json['emails'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'authToken': !exists(json, 'auth_token') ? undefined : json['auth_token'],
        'tokenSecret': !exists(json, 'token_secret') ? undefined : json['token_secret'],
        'authExpiration': !exists(json, 'auth_expiration') ? undefined : (new Date(json['auth_expiration'])),
    };
}

export function CreatePlatformConnectionDtoToJSON(value?: CreatePlatformConnectionDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userid': value.userid,
        'profile_id': value.profileId,
        'platform': value.platform,
        'emails': value.emails,
        'name': value.name,
        'phone': value.phone,
        'auth_token': value.authToken,
        'token_secret': value.tokenSecret,
        'auth_expiration': value.authExpiration === undefined ? undefined : (value.authExpiration.toISOString()),
    };
}

