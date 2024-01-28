import { http, HttpResponse } from 'msw';
import { expectedShipData, expectedSystems1, expectedSystems2 } from './ExpectedData';

export const handlers = [
    http.post('https://andrewlu.ca/api/login', () => {
        return new HttpResponse(null, {
            status: 201,
        })
    }),
    http.get('https://api.spacetraders.io/v2/my/agent', () => {
        return HttpResponse.json(
            {
                status: 200,
                data: {
                    "accountId": "clrv7o2111c9cs60cmytp3ptg",
                    "symbol": "ALU1029",
                    "headquarters": "X1-YP52-A1",
                    "credits": 175000,
                    "startingFaction": "COSMIC",
                    "shipCount": 2
                }
            })
    }),
    http.post('https://andrewlu.ca/api/auth', () => {
        return new HttpResponse(null, {
            status: 201
        })
    }),
    http.get('https://api.spacetraders.io/v2/my/ships', () => {

        return HttpResponse.json(
            {
                status: 200,
                data: expectedShipData.data,
                meta: expectedShipData.meta
            })
    }),
    http.get('https://api.spacetraders.io/v2/systems/X1-YP52/waypoints/X1-YP52-A1', () => {

        return HttpResponse.json(
            {
                status: 200,
                data: expectedSystems1.data,
            })
    }),
    http.get('https://api.spacetraders.io/v2/systems/X1-YP52/waypoints/X1-YP52-H55', () => {

        return HttpResponse.json(
            {
                status: 200,
                data: expectedSystems2.data,
            })
    }),
]


