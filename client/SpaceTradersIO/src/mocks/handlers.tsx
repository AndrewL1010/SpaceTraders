import { http, HttpResponse, PathParams } from 'msw';
import * as MockData from './expectedData';

export const handlers = [
    http.post('/api/login', () => {
        return new HttpResponse(null, {
            status: 201,
        })
    }),
    http.get('https://api.spacetraders.io/v2/my/agent', () => {
        return HttpResponse.json(
            {
                status: 200,
                data: {
                    "accountId": "cls2gnoys9xtcs60cmaizkic6",
                    "symbol": "ALU2000",
                    "headquarters": "X1-HB61-A1",
                    "credits": 238155,
                    "startingFaction": "COSMIC",
                    "shipCount": 2
                }
            })
    }),
    http.post('/api/auth', () => {
        return new HttpResponse(null, {
            status: 201
        })
    }),
    http.get('https://api.spacetraders.io/v2/my/ships', async () => {

        return HttpResponse.json(
            {
                status: 200,
                data: MockData.expectedShipData.data,
                meta: MockData.expectedShipData.meta
            })
    }),
    http.get('https://api.spacetraders.io/v2/systems/X1-HB61/waypoints/X1-HB61-A1', () => {

        return HttpResponse.json(
            {
                status: 200,
                data: MockData.expectedSystems1.data,
            })
    }),
    http.get('https://api.spacetraders.io/v2/systems/X1-HB61/waypoints/X1-HB61-H55', () => {

        return HttpResponse.json(
            {
                status: 200,
                data: MockData.expectedSystems2.data,
            })
    }),


    http.post('/api/logout', () => {

        return new HttpResponse(null, {
            status: 204
        })
    }),
    http.get('https://api.spacetraders.io/v2/systems', ({ request }) => {
        const url = new URL(request.url);
        const pageNumber = url.searchParams.get("page");
        return HttpResponse.json(
            {
                status: 200,
                data: pageNumber == "1" ? MockData.systemsPage1Data.data : MockData.systemsPage4Data.data,
                meta: pageNumber == "1" ? MockData.systemsPage1Data.meta : MockData.systemsPage4Data.meta
            })
    }),
    http.post('https://api.spacetraders.io/v2/my/ships/ALU2000-1/refuel', () => {

        return HttpResponse.json(
            {
                status: 200,
                data: {
                    transaction: {
                        totalPrice: 0
                    }
                },
                meta: MockData.systemsPage1Data.meta
            })
    }),
    http.post("https://api.spacetraders.io/v2/register", () => {

        return HttpResponse.json(
            {
                status: 201,
                data: MockData.mockEmailData

            })
    }),
    http.post("/api/register", () => {

        return new HttpResponse(null, {
            status: 201
        })
    }),
    http.get("https://api.spacetraders.io/v2/systems/X1-HB61/waypoints", () => {

        return HttpResponse.json(
            {
                status: 200,
                data: MockData.waypoints.data,
                meta: MockData.waypoints.meta

            })
    }),
    http.get("https://api.spacetraders.io/v2/systems/X1-MM93/waypoints", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.unavailableWaypoints.data,
                meta: MockData.unavailableWaypoints.meta

            })
    }),
    http.post<PathParams, { waypointSymbol: string }>("https://api.spacetraders.io/v2/my/ships/ALU2000-1/navigate", async ({ request }) => {

        const body = await request.json();
        if (body.waypointSymbol === "X1-HB61-B9") {
            return HttpResponse.json(
                {
                    status: 200,
                    data: MockData.navigateData.data,

                })
        }
        return HttpResponse.json(
            {
                status: 400,
                error: MockData.navigateError.error,

            })


    }),
    http.post("https://api.spacetraders.io/v2/my/ships/ALU2000-1/extract", () => {

        return HttpResponse.json(
            {
                status: 201,
                data: MockData.extraction.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/ships/ALU2000-1/orbit", () => {

        return HttpResponse.json(
            {
                status: 200,
                data: MockData.orbit.data,

            })
    }),

    http.get("https://api.spacetraders.io/v2/systems/X1-HB61/waypoints/X1-HB61-A1/market", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.market.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/ships/ALU2000-1/purchase", () => {
        return HttpResponse.json(
            {
                status: 201,
                data: MockData.purchaseFood.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/ships/ALU2000-1/sell", () => {
        return HttpResponse.json(
            {
                status: 201,
                data: MockData.sellFood.data,

            })
    }),
    http.get("https://api.spacetraders.io/v2/systems/X1-HB61/waypoints/X1-HB61-H55/shipyard", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.shipyard.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/ships", () => {
        return HttpResponse.json(
            {
                status: 201,
                data: MockData.shipDataAfterPurchase.data,

            })
    }),
    http.get("https://api.spacetraders.io/v2/my/contracts", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.contract.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/contracts/cls57wrj0jtr4s60chr67gbn9/accept", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.acceptedContract.data,

            })
    }),

]

export const failHandlers = [
    http.get('https://api.spacetraders.io/v2/my/agent', () => {
        return HttpResponse.json(
            {
                status: 200,
                data: {
                    "accountId": "cls2gnoys9xtcs60cmaizkic6",
                    "symbol": "ALU2000",
                    "headquarters": "X1-HB61-A1",
                    "credits": 0,
                    "startingFaction": "COSMIC",
                    "shipCount": 2
                }
            }
        )
    }),
    http.get("https://api.spacetraders.io/v2/systems/X1-HB61/waypoints/X1-HB61-H55/shipyard", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.shipyard.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/register", () => {

        return HttpResponse.json(
            {
                status: 4111,
                error: MockData.registerNameTaken.error

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/ships/ALU2000-1/purchase", () => {
        return HttpResponse.json(
            {
                status: 4217,
                error: MockData.cargoLimitExceeded.error,

            })
    }),

]

export const postContractAccepted = [
    http.get("https://api.spacetraders.io/v2/my/contracts", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.AcceptedContractList.data,

            })
    }),
    http.post("https://api.spacetraders.io/v2/my/contracts/cls57wrj0jtr4s60chr67gbn9/deliver", () => {
        return HttpResponse.json(
            {
                status: 200,
                data: MockData.deliveredContract.data,
            })
    }),
    http.get('https://api.spacetraders.io/v2/my/ships/ALU2000-1', async () => {

        return HttpResponse.json(
            {
                status: 200,
                data: MockData.contractPickedShip.data,
            })
    }),
]


export const insufficientCreditsForFood = [
    http.post("https://api.spacetraders.io/v2/my/ships/ALU2000-1/purchase", () => {
        return HttpResponse.json(
            {
                status: 4600,
                error: MockData.insufficientCreditsPurchase.error,

            })
    }),
]


