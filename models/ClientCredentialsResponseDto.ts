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
 * @interface ClientCredentialsResponseDto
 */
export interface ClientCredentialsResponseDto {
    /**
     * 
     * @type {string}
     * @memberof ClientCredentialsResponseDto
     */
    accessToken: string;
    /**
     * 
     * @type {number}
     * @memberof ClientCredentialsResponseDto
     */
    expiresIn: number;
    /**
     * 
     * @type {string}
     * @memberof ClientCredentialsResponseDto
     */
    tokenType: string;
}

export function ClientCredentialsResponseDtoFromJSON(json: any): ClientCredentialsResponseDto {
    return ClientCredentialsResponseDtoFromJSONTyped(json, false);
}

export function ClientCredentialsResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientCredentialsResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': json['access_token'],
        'expiresIn': json['expires_in'],
        'tokenType': json['token_type'],
    };
}

export function ClientCredentialsResponseDtoToJSON(value?: ClientCredentialsResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.accessToken,
        'expires_in': value.expiresIn,
        'token_type': value.tokenType,
    };
}

