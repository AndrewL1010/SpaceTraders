
export const expectedShipData = {
    "data": [
        {
            "symbol": "ALU2000-1",
            "nav": {
                "systemSymbol": "X1-HB61",
                "waypointSymbol": "X1-HB61-A1",
                "route": {
                    "departure": {
                        "symbol": "X1-HB61-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-HB61",
                        "x": -19,
                        "y": -13
                    },
                    "origin": {
                        "symbol": "X1-HB61-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-HB61",
                        "x": -19,
                        "y": -13
                    },
                    "destination": {
                        "symbol": "X1-HB61-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-HB61",
                        "x": -19,
                        "y": -13
                    },
                    "arrival": "2024-02-01T00:11:03.182Z",
                    "departureTime": "2024-02-01T00:11:03.182Z"
                },
                "status": "DOCKED",
                "flightMode": "CRUISE"
            },
            "crew": {
                "current": 57,
                "capacity": 80,
                "required": 57,
                "rotation": "STRICT",
                "morale": 100,
                "wages": 0
            },
            "fuel": {
                "current": 400,
                "capacity": 400,
                "consumed": {
                    "amount": 0,
                    "timestamp": "2024-02-01T00:11:03.182Z"
                }
            },
            "cooldown": {
                "shipSymbol": "ALU2000-1",
                "totalSeconds": 0,
                "remainingSeconds": 0
            },
            "frame": {
                "symbol": "FRAME_FRIGATE",
                "name": "Frigate",
                "description": "A medium-sized, multi-purpose spacecraft, often used for combat, transport, or support operations.",
                "moduleSlots": 8,
                "mountingPoints": 5,
                "fuelCapacity": 400,
                "condition": 100,
                "requirements": {
                    "power": 8,
                    "crew": 25
                }
            },
            "reactor": {
                "symbol": "REACTOR_FISSION_I",
                "name": "Fission Reactor I",
                "description": "A basic fission power reactor, used to generate electricity from nuclear fission reactions.",
                "condition": 100,
                "powerOutput": 31,
                "requirements": {
                    "crew": 8
                }
            },
            "engine": {
                "symbol": "ENGINE_ION_DRIVE_II",
                "name": "Ion Drive II",
                "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance.",
                "condition": 100,
                "speed": 30,
                "requirements": {
                    "power": 6,
                    "crew": 8
                }
            },
            "modules": [
                {
                    "symbol": "MODULE_CARGO_HOLD_II",
                    "name": "Expanded Cargo Hold",
                    "description": "An expanded cargo hold module that provides more efficient storage space for a ship's cargo.",
                    "capacity": 40,
                    "requirements": {
                        "crew": 2,
                        "power": 2,
                        "slots": 2
                    }
                },
                {
                    "symbol": "MODULE_CREW_QUARTERS_I",
                    "name": "Crew Quarters",
                    "description": "A module that provides living space and amenities for the crew.",
                    "capacity": 40,
                    "requirements": {
                        "crew": 2,
                        "power": 1,
                        "slots": 1
                    }
                },
                {
                    "symbol": "MODULE_CREW_QUARTERS_I",
                    "name": "Crew Quarters",
                    "description": "A module that provides living space and amenities for the crew.",
                    "capacity": 40,
                    "requirements": {
                        "crew": 2,
                        "power": 1,
                        "slots": 1
                    }
                },
                {
                    "symbol": "MODULE_MINERAL_PROCESSOR_I",
                    "name": "Mineral Processor",
                    "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
                    "requirements": {
                        "crew": 0,
                        "power": 1,
                        "slots": 2
                    }
                },
                {
                    "symbol": "MODULE_GAS_PROCESSOR_I",
                    "name": "Gas Processor",
                    "description": "Filters and processes extracted gases into their component parts, filters out impurities, and containerizes them into raw storage units.",
                    "requirements": {
                        "crew": 0,
                        "power": 1,
                        "slots": 2
                    }
                }
            ],
            "mounts": [
                {
                    "symbol": "MOUNT_SENSOR_ARRAY_II",
                    "name": "Sensor Array II",
                    "description": "An advanced sensor array that improves a ship's ability to detect and track other objects in space with greater accuracy and range.",
                    "strength": 4,
                    "requirements": {
                        "crew": 2,
                        "power": 2
                    }
                },
                {
                    "symbol": "MOUNT_GAS_SIPHON_II",
                    "name": "Gas Siphon II",
                    "description": "An advanced gas siphon that can extract gas from gas giants and other gas-rich bodies more efficiently and at a higher rate.",
                    "strength": 20,
                    "requirements": {
                        "crew": 2,
                        "power": 2
                    }
                },
                {
                    "symbol": "MOUNT_MINING_LASER_II",
                    "name": "Mining Laser II",
                    "description": "An advanced mining laser that is more efficient and effective at extracting valuable minerals from asteroids and other space objects.",
                    "strength": 5,
                    "requirements": {
                        "crew": 2,
                        "power": 2
                    }
                },
                {
                    "symbol": "MOUNT_SURVEYOR_II",
                    "name": "Surveyor II",
                    "description": "An advanced survey probe that can be used to gather information about a mineral deposit with greater accuracy.",
                    "strength": 2,
                    "deposits": [
                        "QUARTZ_SAND",
                        "SILICON_CRYSTALS",
                        "PRECIOUS_STONES",
                        "ICE_WATER",
                        "AMMONIA_ICE",
                        "IRON_ORE",
                        "COPPER_ORE",
                        "SILVER_ORE",
                        "ALUMINUM_ORE",
                        "GOLD_ORE",
                        "PLATINUM_ORE",
                        "DIAMONDS",
                        "URANITE_ORE"
                    ],
                    "requirements": {
                        "crew": 4,
                        "power": 3
                    }
                }
            ],
            "registration": {
                "name": "ALU2000-1",
                "factionSymbol": "COSMIC",
                "role": "COMMAND"
            },
            "cargo": {
                "capacity": 100,
                "units": 49,
                "inventory": [
                    {
                        "symbol": "ALUMINUM_ORE",
                        "name": "Aluminum Ore",
                        "description": "Valuable type of ore",
                        "units": 49
                    }
                ]
            }
        },
        {
            "symbol": "ALU2000-2",
            "nav": {
                "systemSymbol": "X1-HB61",
                "waypointSymbol": "X1-HB61-H55",
                "route": {
                    "departure": {
                        "symbol": "X1-HB61-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-HB61",
                        "x": 24,
                        "y": -40
                    },
                    "origin": {
                        "symbol": "X1-HB61-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-HB61",
                        "x": 24,
                        "y": -40
                    },
                    "destination": {
                        "symbol": "X1-HB61-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-HB61",
                        "x": 24,
                        "y": -40
                    },
                    "arrival": "2024-02-01T00:11:03.283Z",
                    "departureTime": "2024-02-01T00:11:03.283Z"
                },
                "status": "DOCKED",
                "flightMode": "CRUISE"
            },
            "crew": {
                "current": 0,
                "capacity": 0,
                "required": 0,
                "rotation": "STRICT",
                "morale": 100,
                "wages": 0
            },
            "fuel": {
                "current": 0,
                "capacity": 0,
                "consumed": {
                    "amount": 0,
                    "timestamp": "2024-02-01T00:11:03.283Z"
                }
            },
            "cooldown": {
                "shipSymbol": "ALU2000-2",
                "totalSeconds": 0,
                "remainingSeconds": 0
            },
            "frame": {
                "symbol": "FRAME_PROBE",
                "name": "Probe",
                "description": "A small, unmanned spacecraft used for exploration, reconnaissance, and scientific research.",
                "moduleSlots": 0,
                "mountingPoints": 0,
                "fuelCapacity": 0,
                "condition": 100,
                "requirements": {
                    "power": 1,
                    "crew": 0
                }
            },
            "reactor": {
                "symbol": "REACTOR_SOLAR_I",
                "name": "Solar Reactor I",
                "description": "A basic solar power reactor, used to generate electricity from solar energy.",
                "condition": 100,
                "powerOutput": 3,
                "requirements": {
                    "crew": 0
                }
            },
            "engine": {
                "symbol": "ENGINE_IMPULSE_DRIVE_I",
                "name": "Impulse Drive I",
                "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
                "condition": 100,
                "speed": 3,
                "requirements": {
                    "power": 1,
                    "crew": 0
                }
            },
            "modules": [],
            "mounts": [],
            "registration": {
                "name": "ALU2000-2",
                "factionSymbol": "COSMIC",
                "role": "SATELLITE"
            },
            "cargo": {
                "capacity": 0,
                "units": 0,
                "inventory": []
            }
        }
    ],
    "meta": {
        "total": 2,
        "page": 1,
        "limit": 10
    }
}


export const expectedSystems1 = {
    "data": {
        "systemSymbol": "X1-HB61",
        "symbol": "X1-HB61-A1",
        "type": "PLANET",
        "x": -19,
        "y": -13,
        "orbitals": [
            {
                "symbol": "X1-HB61-A2"
            },
            {
                "symbol": "X1-HB61-A3"
            },
            {
                "symbol": "X1-HB61-A4"
            }
        ],
        "traits": [
            {
                "symbol": "TEMPERATE",
                "name": "Temperate",
                "description": "A world with a mild climate and balanced ecosystem, providing a comfortable environment for a variety of life forms and supporting diverse industries."
            },
            {
                "symbol": "SPRAWLING_CITIES",
                "name": "Sprawling Cities",
                "description": "Expansive urban centers that stretch across the landscape, boasting advanced infrastructure and diverse populations."
            },
            {
                "symbol": "BREATHABLE_ATMOSPHERE",
                "name": "Breathable Atmosphere",
                "description": "A waypoint with a life-sustaining atmosphere, allowing for easy colonization and the flourishing of diverse ecosystems without the need for advanced life support systems."
            },
            {
                "symbol": "DRY_SEABEDS",
                "name": "Dry Seabeds",
                "description": "Vast, desolate landscapes that once held oceans, now exposing the remnants of ancient marine life and providing opportunities for the discovery of valuable resources."
            },
            {
                "symbol": "PERPETUAL_DAYLIGHT",
                "name": "Perpetual Daylight",
                "description": "A waypoint that never experiences darkness, providing abundant solar energy and unique living conditions for its inhabitants."
            },
            {
                "symbol": "MARKETPLACE",
                "name": "Marketplace",
                "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
            }
        ],
        "modifiers": [],
        "chart": {
            "submittedBy": "COSMIC",
            "submittedOn": "2024-01-28T17:24:33.557Z"
        },
        "faction": {
            "symbol": "COSMIC"
        },
        "isUnderConstruction": false
    }
}
export const expectedSystems2 = {
    "data": {
        "systemSymbol": "X1-HB61",
        "symbol": "X1-HB61-H55",
        "type": "MOON",
        "x": 24,
        "y": -40,
        "orbitals": [],
        "traits": [
            {
                "symbol": "ROCKY",
                "name": "Rocky",
                "description": "A world with a rugged, rocky landscape, rich in minerals and other resources, providing a variety of opportunities for mining, research, and exploration."
            },
            {
                "symbol": "OUTPOST",
                "name": "Outpost",
                "description": "A small, remote settlement providing essential services and a safe haven for travelers passing through."
            },
            {
                "symbol": "VIBRANT_AURORAS",
                "name": "Vibrant Auroras",
                "description": "A celestial light show caused by the interaction of charged particles with the waypoint's atmosphere, creating a mesmerizing spectacle and attracting tourists from across the galaxy."
            },
            {
                "symbol": "INDUSTRIAL",
                "name": "Industrial",
                "description": "A waypoint dominated by factories, refineries, and other heavy industries, often accompanied by pollution and a bustling workforce."
            },
            {
                "symbol": "MARKETPLACE",
                "name": "Marketplace",
                "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
            },
            {
                "symbol": "SHIPYARD",
                "name": "Shipyard",
                "description": "A bustling hub for the construction, repair, and sale of various spacecraft, from humble shuttles to mighty warships."
            }
        ],
        "modifiers": [],
        "chart": {
            "submittedBy": "COSMIC",
            "submittedOn": "2024-01-28T17:24:33.698Z"
        },
        "faction": {
            "symbol": "COSMIC"
        },
        "orbits": "X1-HB61-H54",
        "isUnderConstruction": false
    }
}
export const systemsPage1Data = {
    "data": [
        {
            "symbol": "X1-HN18",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": -4792,
            "y": -5050,
            "waypoints": [
                {
                    "symbol": "X1-HN18-ZX1B",
                    "type": "GAS_GIANT",
                    "x": 16,
                    "y": 3,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-DD4X",
                    "type": "ASTEROID",
                    "x": 116,
                    "y": -713,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-EB5E",
                    "type": "ASTEROID",
                    "x": 694,
                    "y": 249,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-ED6Z",
                    "type": "ASTEROID",
                    "x": -464,
                    "y": 573,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-XC8X",
                    "type": "ASTEROID",
                    "x": -371,
                    "y": 619,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-FB9Z",
                    "type": "ASTEROID",
                    "x": -228,
                    "y": 724,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-FB2D",
                    "type": "ASTEROID",
                    "x": -621,
                    "y": -423,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-CD7D",
                    "type": "ASTEROID",
                    "x": -203,
                    "y": 733,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-DB3Z",
                    "type": "ASTEROID",
                    "x": -28,
                    "y": -779,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HN18-F10F",
                    "type": "ASTEROID",
                    "x": -510,
                    "y": -532,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-MM93",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 1073,
            "y": -284,
            "waypoints": [
                {
                    "symbol": "X1-MM93-EF3Z",
                    "type": "GAS_GIANT",
                    "x": 45,
                    "y": 3,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-CZ1A",
                    "type": "PLANET",
                    "x": 20,
                    "y": 1,
                    "orbitals": [
                        {
                            "symbol": "X1-MM93-AA2E"
                        }
                    ]
                },
                {
                    "symbol": "X1-MM93-A11F",
                    "type": "ASTEROID",
                    "x": 690,
                    "y": 239,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-EF6B",
                    "type": "ASTEROID",
                    "x": -576,
                    "y": 427,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-C12B",
                    "type": "ASTEROID",
                    "x": 720,
                    "y": 6,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-ZZ4A",
                    "type": "GAS_GIANT",
                    "x": 35,
                    "y": 69,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-A13C",
                    "type": "ASTEROID",
                    "x": -162,
                    "y": 739,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-FX8E",
                    "type": "ASTEROID",
                    "x": -562,
                    "y": -484,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-DC5B",
                    "type": "ASTEROID",
                    "x": -14,
                    "y": 726,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-XZ7Z",
                    "type": "ASTEROID",
                    "x": -749,
                    "y": -224,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-XC9A",
                    "type": "ASTEROID",
                    "x": -191,
                    "y": -742,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-X10F",
                    "type": "ASTEROID",
                    "x": 23,
                    "y": -779,
                    "orbitals": []
                },
                {
                    "symbol": "X1-MM93-AA2E",
                    "type": "MOON",
                    "x": 20,
                    "y": 1,
                    "orbitals": [],
                    "orbits": "X1-MM93-CZ1A"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-RK62",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": -1870,
            "y": 193,
            "waypoints": [
                {
                    "symbol": "X1-RK62-C13Z",
                    "type": "ASTEROID",
                    "x": -74,
                    "y": 343,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-A17D",
                    "type": "ASTEROID",
                    "x": 133,
                    "y": -336,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-DA4D",
                    "type": "PLANET",
                    "x": 37,
                    "y": 13,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-EC1Z",
                    "type": "PLANET",
                    "x": 17,
                    "y": -3,
                    "orbitals": [
                        {
                            "symbol": "X1-RK62-ZA2C"
                        }
                    ]
                },
                {
                    "symbol": "X1-RK62-CA3D",
                    "type": "PLANET",
                    "x": -29,
                    "y": 3,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-A18F",
                    "type": "ASTEROID",
                    "x": 108,
                    "y": -343,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-E19A",
                    "type": "ASTEROID",
                    "x": 354,
                    "y": -91,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-F14D",
                    "type": "ASTEROID",
                    "x": -386,
                    "y": -6,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-Z15X",
                    "type": "ASTEROID",
                    "x": -353,
                    "y": -116,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-ZE5B",
                    "type": "JUMP_GATE",
                    "x": 369,
                    "y": 260,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-CA9Z",
                    "type": "ASTEROID",
                    "x": 329,
                    "y": 134,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-D16Z",
                    "type": "ASTEROID",
                    "x": -215,
                    "y": -271,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-ZB7Z",
                    "type": "ASTEROID",
                    "x": 328,
                    "y": -76,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-C10D",
                    "type": "ASTEROID",
                    "x": 369,
                    "y": 113,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-BA6E",
                    "type": "FUEL_STATION",
                    "x": 189,
                    "y": 133,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-CX8F",
                    "type": "ASTEROID",
                    "x": 356,
                    "y": -15,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-F11Z",
                    "type": "ASTEROID",
                    "x": -84,
                    "y": 373,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-F12F",
                    "type": "ASTEROID",
                    "x": 53,
                    "y": 331,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK62-ZA2C",
                    "type": "MOON",
                    "x": 17,
                    "y": -3,
                    "orbitals": [],
                    "orbits": "X1-RK62-EC1Z"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-RR27",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": 353,
            "y": 2781,
            "waypoints": [
                {
                    "symbol": "X1-RR27-BC5C",
                    "type": "ASTEROID",
                    "x": -620,
                    "y": -383,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-EF1B",
                    "type": "GAS_GIANT",
                    "x": -16,
                    "y": 13,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-XB6B",
                    "type": "ASTEROID",
                    "x": -666,
                    "y": -352,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-DF9D",
                    "type": "ASTEROID",
                    "x": 700,
                    "y": 314,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-E10E",
                    "type": "ASTEROID",
                    "x": 607,
                    "y": 495,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-BC2A",
                    "type": "ASTEROID",
                    "x": 437,
                    "y": 613,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-CB3Z",
                    "type": "ASTEROID",
                    "x": 117,
                    "y": 751,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-BB4B",
                    "type": "ASTEROID",
                    "x": -781,
                    "y": 92,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-AC7B",
                    "type": "ASTEROID",
                    "x": -395,
                    "y": -647,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RR27-DX8X",
                    "type": "ASTEROID",
                    "x": 607,
                    "y": -486,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QU31",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": -4796,
            "y": 4050,
            "waypoints": [
                {
                    "symbol": "X1-QU31-EA6C",
                    "type": "GAS_GIANT",
                    "x": 61,
                    "y": -14,
                    "orbitals": [
                        {
                            "symbol": "X1-QU31-CC8X"
                        },
                        {
                            "symbol": "X1-QU31-XE7C"
                        }
                    ]
                },
                {
                    "symbol": "X1-QU31-EF1A",
                    "type": "PLANET",
                    "x": 2,
                    "y": 11,
                    "orbitals": [
                        {
                            "symbol": "X1-QU31-AD2X"
                        }
                    ]
                },
                {
                    "symbol": "X1-QU31-E14Z",
                    "type": "ASTEROID",
                    "x": -183,
                    "y": 334,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-Z16C",
                    "type": "ASTEROID",
                    "x": -318,
                    "y": -185,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-Z19B",
                    "type": "ASTEROID",
                    "x": -70,
                    "y": -359,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-D21Z",
                    "type": "ASTEROID",
                    "x": -24,
                    "y": -378,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-B13C",
                    "type": "ASTEROID",
                    "x": 121,
                    "y": 335,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-CC8X",
                    "type": "MOON",
                    "x": 61,
                    "y": -14,
                    "orbitals": [],
                    "orbits": "X1-QU31-EA6C"
                },
                {
                    "symbol": "X1-QU31-EA3Z",
                    "type": "PLANET",
                    "x": 4,
                    "y": 24,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-XD4D",
                    "type": "GAS_GIANT",
                    "x": 15,
                    "y": 52,
                    "orbitals": [
                        {
                            "symbol": "X1-QU31-EX5X"
                        }
                    ]
                },
                {
                    "symbol": "X1-QU31-X25F",
                    "type": "ASTEROID",
                    "x": 279,
                    "y": 167,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-B27C",
                    "type": "ASTEROID",
                    "x": 258,
                    "y": 211,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-E23A",
                    "type": "ASTEROID",
                    "x": 308,
                    "y": -73,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-XE7C",
                    "type": "MOON",
                    "x": 61,
                    "y": -14,
                    "orbitals": [],
                    "orbits": "X1-QU31-EA6C"
                },
                {
                    "symbol": "X1-QU31-X15F",
                    "type": "ASTEROID",
                    "x": -83,
                    "y": 323,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-Z11C",
                    "type": "JUMP_GATE",
                    "x": 216,
                    "y": -395,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-AD2X",
                    "type": "MOON",
                    "x": 2,
                    "y": 11,
                    "orbitals": [],
                    "orbits": "X1-QU31-EF1A"
                },
                {
                    "symbol": "X1-QU31-DX9Z",
                    "type": "GAS_GIANT",
                    "x": 395,
                    "y": -115,
                    "orbitals": [
                        {
                            "symbol": "X1-QU31-B10B"
                        }
                    ]
                },
                {
                    "symbol": "X1-QU31-X18C",
                    "type": "ASTEROID",
                    "x": -97,
                    "y": -373,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-E12X",
                    "type": "ASTEROID",
                    "x": 96,
                    "y": 370,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-C22Z",
                    "type": "ASTEROID",
                    "x": 179,
                    "y": -272,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-Z24D",
                    "type": "ASTEROID",
                    "x": 215,
                    "y": 277,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-EX5X",
                    "type": "MOON",
                    "x": 15,
                    "y": 52,
                    "orbitals": [],
                    "orbits": "X1-QU31-XD4D"
                },
                {
                    "symbol": "X1-QU31-A17C",
                    "type": "ASTEROID",
                    "x": -147,
                    "y": -285,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-B20D",
                    "type": "ASTEROID",
                    "x": 181,
                    "y": -258,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-Z26Z",
                    "type": "ASTEROID",
                    "x": 334,
                    "y": 20,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QU31-B10B",
                    "type": "ORBITAL_STATION",
                    "x": 395,
                    "y": -115,
                    "orbitals": [],
                    "orbits": "X1-QU31-DX9Z"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-JK84",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": 643,
            "y": -3185,
            "waypoints": [
                {
                    "symbol": "X1-JK84-DZ1E",
                    "type": "PLANET",
                    "x": 16,
                    "y": -10,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-B13D",
                    "type": "ASTEROID",
                    "x": 279,
                    "y": 668,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-EF8X",
                    "type": "ASTEROID",
                    "x": -353,
                    "y": 624,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-E11Z",
                    "type": "ASTEROID",
                    "x": 730,
                    "y": 57,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-X12Z",
                    "type": "ASTEROID",
                    "x": 744,
                    "y": 238,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-XZ7A",
                    "type": "ASTEROID",
                    "x": 93,
                    "y": 743,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-A10B",
                    "type": "ASTEROID",
                    "x": 152,
                    "y": -698,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-EE3A",
                    "type": "GAS_GIANT",
                    "x": 31,
                    "y": -31,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-BC4E",
                    "type": "ASTEROID",
                    "x": 371,
                    "y": 682,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-CB9Z",
                    "type": "ASTEROID",
                    "x": -698,
                    "y": 127,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-DD5X",
                    "type": "ASTEROID",
                    "x": -95,
                    "y": 728,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-XF2Z",
                    "type": "GAS_GIANT",
                    "x": -31,
                    "y": 17,
                    "orbitals": []
                },
                {
                    "symbol": "X1-JK84-BX6F",
                    "type": "ASTEROID",
                    "x": -7,
                    "y": 774,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-PD18",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": -5133,
            "y": 4040,
            "waypoints": [
                {
                    "symbol": "X1-PD18-XX2C",
                    "type": "ASTEROID",
                    "x": -510,
                    "y": 583,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-XZ8A",
                    "type": "ASTEROID",
                    "x": -456,
                    "y": 599,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-AF1C",
                    "type": "ASTEROID",
                    "x": -559,
                    "y": 528,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-XB7E",
                    "type": "ASTEROID",
                    "x": 732,
                    "y": 41,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-EA4F",
                    "type": "ASTEROID",
                    "x": 24,
                    "y": -726,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-FA6B",
                    "type": "ASTEROID",
                    "x": 150,
                    "y": -709,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-EA5Z",
                    "type": "ASTEROID",
                    "x": 120,
                    "y": -729,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PD18-ZZ3B",
                    "type": "ASTEROID",
                    "x": -698,
                    "y": 153,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QM73",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 3281,
            "y": -5522,
            "waypoints": [
                {
                    "symbol": "X1-QM73-BF6Z",
                    "type": "ASTEROID",
                    "x": 353,
                    "y": -66,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-B35X",
                    "type": "ASTEROID",
                    "x": 316,
                    "y": -689,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-EF7C",
                    "type": "ASTEROID",
                    "x": 345,
                    "y": 64,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-BA8C",
                    "type": "ASTEROID",
                    "x": 170,
                    "y": 304,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-E54F",
                    "type": "ASTEROID",
                    "x": 53,
                    "y": 771,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z44B",
                    "type": "ASTEROID",
                    "x": 642,
                    "y": 302,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z47E",
                    "type": "ASTEROID",
                    "x": 691,
                    "y": 294,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z24D",
                    "type": "ASTEROID",
                    "x": -774,
                    "y": -72,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-D26Z",
                    "type": "ASTEROID",
                    "x": -710,
                    "y": -148,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-E17B",
                    "type": "ASTEROID",
                    "x": -7,
                    "y": -379,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-D32D",
                    "type": "ASTEROID",
                    "x": 469,
                    "y": -627,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X34E",
                    "type": "ASTEROID",
                    "x": 534,
                    "y": -506,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-EC4E",
                    "type": "ASTEROID",
                    "x": 278,
                    "y": -170,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X38A",
                    "type": "ASTEROID",
                    "x": 60,
                    "y": -715,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-A51Z",
                    "type": "ASTEROID",
                    "x": 368,
                    "y": 676,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z41D",
                    "type": "ASTEROID",
                    "x": 784,
                    "y": 99,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X56E",
                    "type": "ASTEROID",
                    "x": -200,
                    "y": 765,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z46B",
                    "type": "ASTEROID",
                    "x": 627,
                    "y": 461,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z11F",
                    "type": "ASTEROID",
                    "x": -293,
                    "y": 250,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X12Z",
                    "type": "ASTEROID",
                    "x": -313,
                    "y": 162,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X14X",
                    "type": "ASTEROID",
                    "x": -288,
                    "y": 151,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z28Z",
                    "type": "ASTEROID",
                    "x": -190,
                    "y": -738,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-A18X",
                    "type": "JUMP_GATE",
                    "x": -136,
                    "y": -429,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-FB2Z",
                    "type": "ASTEROID",
                    "x": 28,
                    "y": -386,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-ZE3Z",
                    "type": "ASTEROID",
                    "x": 287,
                    "y": -225,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-A37C",
                    "type": "ASTEROID",
                    "x": 471,
                    "y": -547,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X49X",
                    "type": "ASTEROID",
                    "x": 551,
                    "y": 490,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-C40E",
                    "type": "ASTEROID",
                    "x": 696,
                    "y": -335,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-D42E",
                    "type": "ASTEROID",
                    "x": 716,
                    "y": -168,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-B57F",
                    "type": "ASTEROID",
                    "x": 24,
                    "y": 762,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z48D",
                    "type": "ASTEROID",
                    "x": 732,
                    "y": 272,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-B13F",
                    "type": "ASTEROID",
                    "x": -347,
                    "y": -76,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-D16B",
                    "type": "ASTEROID",
                    "x": -291,
                    "y": -147,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X31F",
                    "type": "ASTEROID",
                    "x": 283,
                    "y": -661,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-C21B",
                    "type": "ASTEROID",
                    "x": -665,
                    "y": 298,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-EC1B",
                    "type": "ASTEROID",
                    "x": 99,
                    "y": -374,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-ZX5A",
                    "type": "ASTEROID",
                    "x": 225,
                    "y": -277,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-A39B",
                    "type": "ASTEROID",
                    "x": 630,
                    "y": -344,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X52A",
                    "type": "ASTEROID",
                    "x": 564,
                    "y": 513,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-C43E",
                    "type": "ASTEROID",
                    "x": 724,
                    "y": 42,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-F45F",
                    "type": "ASTEROID",
                    "x": 732,
                    "y": -27,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X10A",
                    "type": "ASTEROID",
                    "x": 29,
                    "y": 352,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-Z22X",
                    "type": "ASTEROID",
                    "x": -744,
                    "y": -154,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-C25E",
                    "type": "ASTEROID",
                    "x": -583,
                    "y": -451,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-B27D",
                    "type": "ASTEROID",
                    "x": -702,
                    "y": -120,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-F29Z",
                    "type": "ASTEROID",
                    "x": -694,
                    "y": -291,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-A20D",
                    "type": "ASTEROID",
                    "x": -292,
                    "y": 680,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-E33X",
                    "type": "ASTEROID",
                    "x": 9,
                    "y": -732,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-E36F",
                    "type": "ASTEROID",
                    "x": 520,
                    "y": -503,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-E50F",
                    "type": "ASTEROID",
                    "x": 315,
                    "y": 664,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X53A",
                    "type": "ASTEROID",
                    "x": -25,
                    "y": 725,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-A55D",
                    "type": "ASTEROID",
                    "x": 432,
                    "y": 648,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-B58B",
                    "type": "ASTEROID",
                    "x": -150,
                    "y": 749,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-CD9A",
                    "type": "ASTEROID",
                    "x": 114,
                    "y": 319,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-B23X",
                    "type": "ASTEROID",
                    "x": -469,
                    "y": 550,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-X15X",
                    "type": "ASTEROID",
                    "x": -270,
                    "y": -230,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-C30A",
                    "type": "ASTEROID",
                    "x": 96,
                    "y": -720,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QM73-F19D",
                    "type": "ASTEROID",
                    "x": -82,
                    "y": 739,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-PX10",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 2846,
            "y": 1227,
            "waypoints": [
                {
                    "symbol": "X1-PX10-ZA2C",
                    "type": "GAS_GIANT",
                    "x": -25,
                    "y": -16,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-ZC8Z",
                    "type": "ASTEROID",
                    "x": -648,
                    "y": 331,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-FE1D",
                    "type": "GAS_GIANT",
                    "x": -13,
                    "y": 1,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-F11X",
                    "type": "ASTEROID",
                    "x": 494,
                    "y": -511,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-ZD3B",
                    "type": "ASTEROID",
                    "x": 741,
                    "y": -265,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-FF9C",
                    "type": "ASTEROID",
                    "x": -752,
                    "y": -202,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-EA6D",
                    "type": "ASTEROID",
                    "x": -275,
                    "y": 700,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-F10A",
                    "type": "ASTEROID",
                    "x": -697,
                    "y": -222,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-A12F",
                    "type": "ASTEROID",
                    "x": 764,
                    "y": -126,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-BC4C",
                    "type": "ASTEROID",
                    "x": 503,
                    "y": 563,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-ZD5F",
                    "type": "ASTEROID",
                    "x": 37,
                    "y": 772,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PX10-XF7E",
                    "type": "ASTEROID",
                    "x": -471,
                    "y": 587,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-PA76",
            "sectorSymbol": "X1",
            "type": "WHITE_DWARF",
            "x": 6721,
            "y": 4932,
            "waypoints": [],
            "factions": []
        },
        {
            "symbol": "X1-KF83",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": -1398,
            "y": 3862,
            "waypoints": [
                {
                    "symbol": "X1-KF83-BX9D",
                    "type": "ASTEROID",
                    "x": -193,
                    "y": -720,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-ZZ6D",
                    "type": "ASTEROID",
                    "x": -755,
                    "y": 109,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-E13B",
                    "type": "ASTEROID",
                    "x": 264,
                    "y": -743,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-DD4E",
                    "type": "ASTEROID",
                    "x": 378,
                    "y": 691,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-DD5A",
                    "type": "ASTEROID",
                    "x": 268,
                    "y": 742,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-X12D",
                    "type": "ASTEROID",
                    "x": 367,
                    "y": -659,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-EF2B",
                    "type": "ASTEROID",
                    "x": 86,
                    "y": -714,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-EZ7Z",
                    "type": "ASTEROID",
                    "x": -375,
                    "y": -688,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-CE8A",
                    "type": "ASTEROID",
                    "x": -356,
                    "y": -622,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-Z11C",
                    "type": "ASTEROID",
                    "x": 267,
                    "y": -714,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-EX1A",
                    "type": "PLANET",
                    "x": -2,
                    "y": 13,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-X10A",
                    "type": "ASTEROID",
                    "x": 327,
                    "y": -646,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KF83-EZ3A",
                    "type": "ASTEROID",
                    "x": 428,
                    "y": 617,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QD73",
            "sectorSymbol": "X1",
            "type": "YOUNG_STAR",
            "x": -2203,
            "y": -431,
            "waypoints": [
                {
                    "symbol": "X1-QD73-FA3Z",
                    "type": "ASTEROID",
                    "x": -638,
                    "y": 417,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-XF6F",
                    "type": "ASTEROID",
                    "x": 697,
                    "y": 203,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-EB5F",
                    "type": "ASTEROID",
                    "x": -5,
                    "y": -757,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-CB7E",
                    "type": "ASTEROID",
                    "x": 263,
                    "y": 699,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-ZD2D",
                    "type": "ASTEROID",
                    "x": -717,
                    "y": 222,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-DF4F",
                    "type": "ASTEROID",
                    "x": -46,
                    "y": -760,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-XB1Z",
                    "type": "GAS_GIANT",
                    "x": -9,
                    "y": 19,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QD73-BC8F",
                    "type": "ASTEROID",
                    "x": -360,
                    "y": 637,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QA72",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": 3225,
            "y": 8,
            "waypoints": [
                {
                    "symbol": "X1-QA72-ZB6X",
                    "type": "ASTEROID",
                    "x": 480,
                    "y": 620,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-FA7E",
                    "type": "ASTEROID",
                    "x": -471,
                    "y": 613,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-X10D",
                    "type": "ASTEROID",
                    "x": -684,
                    "y": -345,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-BB2B",
                    "type": "MOON",
                    "x": -15,
                    "y": 4,
                    "orbitals": [],
                    "orbits": "X1-QA72-XZ1X"
                },
                {
                    "symbol": "X1-QA72-F11D",
                    "type": "ASTEROID",
                    "x": -777,
                    "y": -58,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-XD8F",
                    "type": "ASTEROID",
                    "x": -713,
                    "y": 49,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-DC4B",
                    "type": "GAS_GIANT",
                    "x": 35,
                    "y": -8,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-BD9Z",
                    "type": "ASTEROID",
                    "x": -681,
                    "y": -286,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-AD3A",
                    "type": "MOON",
                    "x": -15,
                    "y": 4,
                    "orbitals": [],
                    "orbits": "X1-QA72-XZ1X"
                },
                {
                    "symbol": "X1-QA72-XZ1X",
                    "type": "PLANET",
                    "x": -15,
                    "y": 4,
                    "orbitals": [
                        {
                            "symbol": "X1-QA72-BB2B"
                        },
                        {
                            "symbol": "X1-QA72-AD3A"
                        }
                    ]
                },
                {
                    "symbol": "X1-QA72-Z13E",
                    "type": "ASTEROID",
                    "x": 711,
                    "y": 96,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-CZ5F",
                    "type": "ASTEROID",
                    "x": 707,
                    "y": -338,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA72-X12Z",
                    "type": "ASTEROID",
                    "x": 277,
                    "y": -710,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QQ81",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 1649,
            "y": -363,
            "waypoints": [
                {
                    "symbol": "X1-QQ81-DX4D",
                    "type": "ASTEROID",
                    "x": -610,
                    "y": 387,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-CC9B",
                    "type": "ASTEROID",
                    "x": 374,
                    "y": -627,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-DF5Z",
                    "type": "ASTEROID",
                    "x": -467,
                    "y": -580,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-FA8X",
                    "type": "ASTEROID",
                    "x": 200,
                    "y": -723,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-FF1A",
                    "type": "GAS_GIANT",
                    "x": 6,
                    "y": -12,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-Z10Z",
                    "type": "ASTEROID",
                    "x": 686,
                    "y": 296,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-XB6C",
                    "type": "ASTEROID",
                    "x": -238,
                    "y": -696,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-EA7Z",
                    "type": "ASTEROID",
                    "x": -52,
                    "y": -759,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-BZ2X",
                    "type": "ASTEROID",
                    "x": 183,
                    "y": 755,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QQ81-EE3A",
                    "type": "ASTEROID",
                    "x": 324,
                    "y": 691,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QA59",
            "sectorSymbol": "X1",
            "type": "YOUNG_STAR",
            "x": 1644,
            "y": -3223,
            "waypoints": [
                {
                    "symbol": "X1-QA59-A14E",
                    "type": "ASTEROID",
                    "x": 347,
                    "y": 11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-A15D",
                    "type": "ASTEROID",
                    "x": 326,
                    "y": 193,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-AZ5D",
                    "type": "FUEL_STATION",
                    "x": 205,
                    "y": 105,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-EF7X",
                    "type": "ASTEROID",
                    "x": -258,
                    "y": 204,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-F16E",
                    "type": "ASTEROID",
                    "x": 307,
                    "y": 202,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-B17B",
                    "type": "ASTEROID",
                    "x": 217,
                    "y": 300,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-A18B",
                    "type": "ASTEROID",
                    "x": 91,
                    "y": 379,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-F12C",
                    "type": "ASTEROID",
                    "x": 110,
                    "y": -312,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-A13F",
                    "type": "ASTEROID",
                    "x": 347,
                    "y": -56,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-XD1B",
                    "type": "PLANET",
                    "x": 4,
                    "y": 19,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-DX3D",
                    "type": "PLANET",
                    "x": 45,
                    "y": 37,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-XC8A",
                    "type": "ASTEROID",
                    "x": -312,
                    "y": 49,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-BD4Z",
                    "type": "JUMP_GATE",
                    "x": 401,
                    "y": 206,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-XX2A",
                    "type": "PLANET",
                    "x": 37,
                    "y": 28,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-BF9X",
                    "type": "ASTEROID",
                    "x": -339,
                    "y": 68,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-E10Z",
                    "type": "ASTEROID",
                    "x": -251,
                    "y": -231,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-C11E",
                    "type": "ASTEROID",
                    "x": 26,
                    "y": -316,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA59-ZZ6E",
                    "type": "ASTEROID",
                    "x": 1,
                    "y": 353,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QK41",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": -1465,
            "y": 322,
            "waypoints": [
                {
                    "symbol": "X1-QK41-FZ1D",
                    "type": "PLANET",
                    "x": -4,
                    "y": 12,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-A18C",
                    "type": "ASTEROID",
                    "x": -253,
                    "y": 287,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-Z14D",
                    "type": "ASTEROID",
                    "x": 48,
                    "y": 313,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-XX8C",
                    "type": "ASTEROID",
                    "x": -15,
                    "y": -354,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-DF9X",
                    "type": "ASTEROID",
                    "x": 43,
                    "y": -328,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-Z11B",
                    "type": "ASTEROID",
                    "x": 308,
                    "y": 39,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-ED3X",
                    "type": "JUMP_GATE",
                    "x": 289,
                    "y": -345,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-E10D",
                    "type": "ASTEROID",
                    "x": 328,
                    "y": -163,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-Z12F",
                    "type": "ASTEROID",
                    "x": 235,
                    "y": 210,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-Z13F",
                    "type": "ASTEROID",
                    "x": 120,
                    "y": 293,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-A16X",
                    "type": "ASTEROID",
                    "x": 109,
                    "y": 369,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-ZA5B",
                    "type": "ASTEROID",
                    "x": -336,
                    "y": 89,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-ZZ6E",
                    "type": "ASTEROID",
                    "x": -308,
                    "y": 48,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-BE2D",
                    "type": "PLANET",
                    "x": 6,
                    "y": 40,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-AD7B",
                    "type": "ASTEROID",
                    "x": -322,
                    "y": -55,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-F17E",
                    "type": "ASTEROID",
                    "x": -248,
                    "y": 274,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-D19C",
                    "type": "ASTEROID",
                    "x": -377,
                    "y": -65,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-X15A",
                    "type": "ASTEROID",
                    "x": 68,
                    "y": 303,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QK41-EA4E",
                    "type": "FUEL_STATION",
                    "x": 147,
                    "y": -175,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QA58",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 7804,
            "y": 2336,
            "waypoints": [
                {
                    "symbol": "X1-QA58-XX1C",
                    "type": "PLANET",
                    "x": 0,
                    "y": -11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-E12C",
                    "type": "ASTEROID",
                    "x": -532,
                    "y": -578,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-BA8X",
                    "type": "ASTEROID",
                    "x": -293,
                    "y": 683,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-XZ4C",
                    "type": "GAS_GIANT",
                    "x": 41,
                    "y": 37,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-DE5B",
                    "type": "ASTEROID",
                    "x": 447,
                    "y": -608,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-FF9Z",
                    "type": "ASTEROID",
                    "x": -163,
                    "y": 701,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-ZX3F",
                    "type": "MOON",
                    "x": 38,
                    "y": 9,
                    "orbitals": [],
                    "orbits": "X1-QA58-DD2E"
                },
                {
                    "symbol": "X1-QA58-E10B",
                    "type": "ASTEROID",
                    "x": -739,
                    "y": -164,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-BZ7F",
                    "type": "ASTEROID",
                    "x": -80,
                    "y": 723,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-Z11X",
                    "type": "ASTEROID",
                    "x": -706,
                    "y": -76,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-BA6E",
                    "type": "ASTEROID",
                    "x": 578,
                    "y": 533,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QA58-DD2E",
                    "type": "PLANET",
                    "x": 38,
                    "y": 9,
                    "orbitals": [
                        {
                            "symbol": "X1-QA58-ZX3F"
                        }
                    ]
                },
                {
                    "symbol": "X1-QA58-C13X",
                    "type": "ASTEROID",
                    "x": 227,
                    "y": -675,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-KQ26",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": -822,
            "y": -5291,
            "waypoints": [
                {
                    "symbol": "X1-KQ26-E10D",
                    "type": "ASTEROID",
                    "x": 761,
                    "y": 130,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-Z11A",
                    "type": "ASTEROID",
                    "x": 422,
                    "y": 582,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-EE1Z",
                    "type": "PLANET",
                    "x": 5,
                    "y": -16,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-B13F",
                    "type": "ASTEROID",
                    "x": -418,
                    "y": 614,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-AB6X",
                    "type": "ASTEROID",
                    "x": -360,
                    "y": -631,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-EZ3D",
                    "type": "MOON",
                    "x": -36,
                    "y": 26,
                    "orbitals": [],
                    "orbits": "X1-KQ26-CZ2Z"
                },
                {
                    "symbol": "X1-KQ26-EB9B",
                    "type": "ASTEROID",
                    "x": 629,
                    "y": 401,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-C12D",
                    "type": "ASTEROID",
                    "x": -293,
                    "y": 674,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-XC5A",
                    "type": "GAS_GIANT",
                    "x": -55,
                    "y": 31,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-EA7B",
                    "type": "ASTEROID",
                    "x": 380,
                    "y": -663,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-CZ2Z",
                    "type": "PLANET",
                    "x": -36,
                    "y": 26,
                    "orbitals": [
                        {
                            "symbol": "X1-KQ26-EZ3D"
                        },
                        {
                            "symbol": "X1-KQ26-XB4E"
                        }
                    ]
                },
                {
                    "symbol": "X1-KQ26-Z14C",
                    "type": "ASTEROID",
                    "x": -555,
                    "y": 512,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-CC8D",
                    "type": "ASTEROID",
                    "x": 168,
                    "y": -734,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KQ26-XB4E",
                    "type": "MOON",
                    "x": -36,
                    "y": 26,
                    "orbitals": [],
                    "orbits": "X1-KQ26-CZ2Z"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-FT86",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": -634,
            "y": 811,
            "waypoints": [
                {
                    "symbol": "X1-FT86-ZB2B",
                    "type": "ASTEROID",
                    "x": 15,
                    "y": 757,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-F10D",
                    "type": "ASTEROID",
                    "x": 626,
                    "y": -418,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-FB1E",
                    "type": "PLANET",
                    "x": 5,
                    "y": -9,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-CC8X",
                    "type": "ASTEROID",
                    "x": -221,
                    "y": -684,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-FE6A",
                    "type": "ASTEROID",
                    "x": -56,
                    "y": -723,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-CA9Z",
                    "type": "ASTEROID",
                    "x": 238,
                    "y": -697,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-E11D",
                    "type": "ASTEROID",
                    "x": 751,
                    "y": 202,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-EX7D",
                    "type": "ASTEROID",
                    "x": -293,
                    "y": -693,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-EZ5D",
                    "type": "ASTEROID",
                    "x": -375,
                    "y": -681,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-AA3A",
                    "type": "ASTEROID",
                    "x": -337,
                    "y": 672,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-EB4X",
                    "type": "ASTEROID",
                    "x": -524,
                    "y": -539,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FT86-D12A",
                    "type": "ASTEROID",
                    "x": 167,
                    "y": 720,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-HZ13",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": -2393,
            "y": -1265,
            "waypoints": [
                {
                    "symbol": "X1-HZ13-EE3F",
                    "type": "GAS_GIANT",
                    "x": -21,
                    "y": -7,
                    "orbitals": [
                        {
                            "symbol": "X1-HZ13-ZZ4C"
                        }
                    ]
                },
                {
                    "symbol": "X1-HZ13-C18X",
                    "type": "ASTEROID",
                    "x": 713,
                    "y": -210,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-F12Z",
                    "type": "ASTEROID",
                    "x": -526,
                    "y": 555,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-ED6X",
                    "type": "MOON",
                    "x": -39,
                    "y": 5,
                    "orbitals": [],
                    "orbits": "X1-HZ13-AC5A"
                },
                {
                    "symbol": "X1-HZ13-FA1B",
                    "type": "GAS_GIANT",
                    "x": 7,
                    "y": 8,
                    "orbitals": [
                        {
                            "symbol": "X1-HZ13-FF2B"
                        }
                    ]
                },
                {
                    "symbol": "X1-HZ13-FE9A",
                    "type": "ASTEROID",
                    "x": 748,
                    "y": -70,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-C16X",
                    "type": "ASTEROID",
                    "x": 397,
                    "y": -614,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-D17B",
                    "type": "ASTEROID",
                    "x": 47,
                    "y": -712,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-FF2B",
                    "type": "MOON",
                    "x": 7,
                    "y": 8,
                    "orbitals": [],
                    "orbits": "X1-HZ13-FA1B"
                },
                {
                    "symbol": "X1-HZ13-CX8A",
                    "type": "ASTEROID",
                    "x": 665,
                    "y": -380,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-D11C",
                    "type": "ASTEROID",
                    "x": 616,
                    "y": 359,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-X14D",
                    "type": "ASTEROID",
                    "x": -509,
                    "y": -570,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-ZZ4C",
                    "type": "MOON",
                    "x": -21,
                    "y": -7,
                    "orbitals": [],
                    "orbits": "X1-HZ13-EE3F"
                },
                {
                    "symbol": "X1-HZ13-CF7A",
                    "type": "ASTEROID",
                    "x": 148,
                    "y": -756,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-D10D",
                    "type": "ASTEROID",
                    "x": 675,
                    "y": 362,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-D13X",
                    "type": "ASTEROID",
                    "x": -314,
                    "y": 668,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HZ13-AC5A",
                    "type": "GAS_GIANT",
                    "x": -39,
                    "y": 5,
                    "orbitals": [
                        {
                            "symbol": "X1-HZ13-ED6X"
                        }
                    ]
                },
                {
                    "symbol": "X1-HZ13-C15C",
                    "type": "ASTEROID",
                    "x": -366,
                    "y": -685,
                    "orbitals": []
                }
            ],
            "factions": []
        }
    ],
    "meta": {
        "total": 8498,
        "page": 1,
        "limit": 20
    }
}
export const waypointsPage1 = {
    "data": [
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-ZX1B",
            "type": "GAS_GIANT",
            "x": 16,
            "y": 3,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-DD4X",
            "type": "ASTEROID",
            "x": 116,
            "y": -713,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-EB5E",
            "type": "ASTEROID",
            "x": 694,
            "y": 249,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-ED6Z",
            "type": "ASTEROID",
            "x": -464,
            "y": 573,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-XC8X",
            "type": "ASTEROID",
            "x": -371,
            "y": 619,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-FB9Z",
            "type": "ASTEROID",
            "x": -228,
            "y": 724,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-FB2D",
            "type": "ASTEROID",
            "x": -621,
            "y": -423,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-CD7D",
            "type": "ASTEROID",
            "x": -203,
            "y": 733,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-DB3Z",
            "type": "ASTEROID",
            "x": -28,
            "y": -779,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HN18",
            "symbol": "X1-HN18-F10F",
            "type": "ASTEROID",
            "x": -510,
            "y": -532,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        }
    ],
    "meta": {
        "total": 10,
        "page": 1,
        "limit": 20
    }
}

export const systemsPage4Data = {
    "data": [
        {
            "symbol": "X1-QX15",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": -1247,
            "y": 2186,
            "waypoints": [
                {
                    "symbol": "X1-QX15-B10B",
                    "type": "ASTEROID",
                    "x": -32,
                    "y": -739,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-FD7Z",
                    "type": "ASTEROID",
                    "x": -723,
                    "y": -181,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-ZB8C",
                    "type": "ASTEROID",
                    "x": -278,
                    "y": -682,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-CF1Z",
                    "type": "PLANET",
                    "x": 15,
                    "y": 4,
                    "orbitals": [
                        {
                            "symbol": "X1-QX15-ZE2B"
                        }
                    ]
                },
                {
                    "symbol": "X1-QX15-D12D",
                    "type": "ASTEROID",
                    "x": 730,
                    "y": -88,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-XD9X",
                    "type": "ASTEROID",
                    "x": 86,
                    "y": -711,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-ZE2B",
                    "type": "MOON",
                    "x": 15,
                    "y": 4,
                    "orbitals": [],
                    "orbits": "X1-QX15-CF1Z"
                },
                {
                    "symbol": "X1-QX15-B11Z",
                    "type": "ASTEROID",
                    "x": 349,
                    "y": -653,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-F13Z",
                    "type": "ASTEROID",
                    "x": 656,
                    "y": -349,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-DF4D",
                    "type": "ASTEROID",
                    "x": 740,
                    "y": 39,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-FC6C",
                    "type": "ASTEROID",
                    "x": -681,
                    "y": 308,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-AD3B",
                    "type": "PLANET",
                    "x": -10,
                    "y": -30,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-F14B",
                    "type": "ASTEROID",
                    "x": 579,
                    "y": -425,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX15-BB5X",
                    "type": "ASTEROID",
                    "x": 160,
                    "y": 701,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-RS83",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": -1334,
            "y": 322,
            "waypoints": [
                {
                    "symbol": "X1-RS83-FA7F",
                    "type": "FUEL_STATION",
                    "x": -19,
                    "y": -229,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-F25B",
                    "type": "ASTEROID",
                    "x": -264,
                    "y": -259,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-E18F",
                    "type": "ASTEROID",
                    "x": -92,
                    "y": 331,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-AF1X",
                    "type": "PLANET",
                    "x": -9,
                    "y": 6,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-XZ2C",
                    "type": "PLANET",
                    "x": 18,
                    "y": 38,
                    "orbitals": [
                        {
                            "symbol": "X1-RS83-BB3A"
                        }
                    ]
                },
                {
                    "symbol": "X1-RS83-E16E",
                    "type": "ASTEROID",
                    "x": -191,
                    "y": 259,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-BB3A",
                    "type": "MOON",
                    "x": 18,
                    "y": 38,
                    "orbitals": [],
                    "orbits": "X1-RS83-XZ2C"
                },
                {
                    "symbol": "X1-RS83-B19Z",
                    "type": "ASTEROID",
                    "x": -187,
                    "y": 249,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-DX4A",
                    "type": "GAS_GIANT",
                    "x": 59,
                    "y": -2,
                    "orbitals": [
                        {
                            "symbol": "X1-RS83-FZ5D"
                        }
                    ]
                },
                {
                    "symbol": "X1-RS83-C22Z",
                    "type": "ASTEROID",
                    "x": -216,
                    "y": -234,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-A27X",
                    "type": "ASTEROID",
                    "x": -5,
                    "y": -360,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-Z10B",
                    "type": "ASTEROID",
                    "x": 348,
                    "y": -132,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-X15F",
                    "type": "ASTEROID",
                    "x": 138,
                    "y": 305,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-C14F",
                    "type": "ASTEROID",
                    "x": 136,
                    "y": 280,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-AC6Z",
                    "type": "JUMP_GATE",
                    "x": -38,
                    "y": -450,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-D24Z",
                    "type": "ASTEROID",
                    "x": -345,
                    "y": -147,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-D12X",
                    "type": "ASTEROID",
                    "x": 333,
                    "y": 111,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-AA8C",
                    "type": "ASTEROID",
                    "x": -124,
                    "y": -288,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-F20X",
                    "type": "ASTEROID",
                    "x": -327,
                    "y": 196,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-B21C",
                    "type": "ASTEROID",
                    "x": -257,
                    "y": 211,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-EX9E",
                    "type": "ASTEROID",
                    "x": 237,
                    "y": -204,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-D26E",
                    "type": "ASTEROID",
                    "x": 39,
                    "y": -312,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-X23A",
                    "type": "ASTEROID",
                    "x": -368,
                    "y": -64,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-Z11A",
                    "type": "ASTEROID",
                    "x": 325,
                    "y": 51,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-C17F",
                    "type": "ASTEROID",
                    "x": -273,
                    "y": 271,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-Z13F",
                    "type": "ASTEROID",
                    "x": 369,
                    "y": 19,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RS83-FZ5D",
                    "type": "MOON",
                    "x": 59,
                    "y": -2,
                    "orbitals": [],
                    "orbits": "X1-RS83-DX4A"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QZ90",
            "sectorSymbol": "X1",
            "type": "YOUNG_STAR",
            "x": -2247,
            "y": -1261,
            "waypoints": [
                {
                    "symbol": "X1-QZ90-A18E",
                    "type": "ASTEROID",
                    "x": 631,
                    "y": -467,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-E20Z",
                    "type": "ASTEROID",
                    "x": 655,
                    "y": 295,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-AC7E",
                    "type": "ASTEROID",
                    "x": 671,
                    "y": -319,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-B12E",
                    "type": "ASTEROID",
                    "x": -741,
                    "y": 70,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-CB3F",
                    "type": "MOON",
                    "x": 33,
                    "y": 31,
                    "orbitals": [],
                    "orbits": "X1-QZ90-ZE2D"
                },
                {
                    "symbol": "X1-QZ90-CD1Z",
                    "type": "PLANET",
                    "x": -15,
                    "y": 8,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-C19F",
                    "type": "ASTEROID",
                    "x": 637,
                    "y": -334,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-FE9A",
                    "type": "ASTEROID",
                    "x": 512,
                    "y": 505,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-X10F",
                    "type": "ASTEROID",
                    "x": -233,
                    "y": 717,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-C14B",
                    "type": "ASTEROID",
                    "x": -738,
                    "y": 117,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-D15D",
                    "type": "ASTEROID",
                    "x": -497,
                    "y": -532,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-XF5Z",
                    "type": "GAS_GIANT",
                    "x": 41,
                    "y": 84,
                    "orbitals": [
                        {
                            "symbol": "X1-QZ90-XZ6X"
                        }
                    ]
                },
                {
                    "symbol": "X1-QZ90-B13Z",
                    "type": "ASTEROID",
                    "x": -534,
                    "y": -465,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-EZ4A",
                    "type": "GAS_GIANT",
                    "x": 66,
                    "y": 16,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-C16F",
                    "type": "ASTEROID",
                    "x": 8,
                    "y": -768,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-XE8Z",
                    "type": "ASTEROID",
                    "x": 619,
                    "y": 362,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-ZE2D",
                    "type": "PLANET",
                    "x": 33,
                    "y": 31,
                    "orbitals": [
                        {
                            "symbol": "X1-QZ90-CB3F"
                        }
                    ]
                },
                {
                    "symbol": "X1-QZ90-F17C",
                    "type": "ASTEROID",
                    "x": 535,
                    "y": -564,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-A11A",
                    "type": "ASTEROID",
                    "x": -779,
                    "y": -91,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QZ90-XZ6X",
                    "type": "MOON",
                    "x": 41,
                    "y": 84,
                    "orbitals": [],
                    "orbits": "X1-QZ90-XF5Z"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-RD47",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": -4599,
            "y": 3419,
            "waypoints": [
                {
                    "symbol": "X1-RD47-ZA1A",
                    "type": "PLANET",
                    "x": -8,
                    "y": -5,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-DB5F",
                    "type": "JUMP_GATE",
                    "x": -89,
                    "y": 443,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-ZA9Z",
                    "type": "ASTEROID",
                    "x": 367,
                    "y": -91,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-FC6D",
                    "type": "FUEL_STATION",
                    "x": -45,
                    "y": 224,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-AB8E",
                    "type": "ASTEROID",
                    "x": 284,
                    "y": -129,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-E11F",
                    "type": "ASTEROID",
                    "x": -37,
                    "y": 362,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-CE7A",
                    "type": "ASTEROID",
                    "x": 136,
                    "y": -307,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-Z14C",
                    "type": "ASTEROID",
                    "x": -312,
                    "y": 50,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-F18C",
                    "type": "ASTEROID",
                    "x": 84,
                    "y": -313,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-E16F",
                    "type": "ASTEROID",
                    "x": 25,
                    "y": -348,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-XB2C",
                    "type": "PLANET",
                    "x": 20,
                    "y": 36,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-F12B",
                    "type": "ASTEROID",
                    "x": -134,
                    "y": 325,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-B13F",
                    "type": "ASTEROID",
                    "x": -343,
                    "y": 48,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-E17F",
                    "type": "ASTEROID",
                    "x": -260,
                    "y": -284,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-C15F",
                    "type": "ASTEROID",
                    "x": -333,
                    "y": -122,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-BD4C",
                    "type": "GAS_GIANT",
                    "x": -85,
                    "y": 6,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-X10E",
                    "type": "ASTEROID",
                    "x": 367,
                    "y": 1,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RD47-FD3Z",
                    "type": "PLANET",
                    "x": 60,
                    "y": -17,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-FF5",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": 3737,
            "y": 1549,
            "waypoints": [
                {
                    "symbol": "X1-FF5-FB8C",
                    "type": "ASTEROID",
                    "x": 312,
                    "y": -218,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z42Z",
                    "type": "ASTEROID",
                    "x": -629,
                    "y": -457,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E45X",
                    "type": "ASTEROID",
                    "x": -549,
                    "y": -471,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X48E",
                    "type": "ASTEROID",
                    "x": -210,
                    "y": -749,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-EX2D",
                    "type": "ASTEROID",
                    "x": -344,
                    "y": -37,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E11Z",
                    "type": "ASTEROID",
                    "x": 373,
                    "y": -102,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E44E",
                    "type": "ASTEROID",
                    "x": -569,
                    "y": -533,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E49X",
                    "type": "ASTEROID",
                    "x": 110,
                    "y": -724,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B50A",
                    "type": "ASTEROID",
                    "x": -325,
                    "y": -692,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z63E",
                    "type": "ASTEROID",
                    "x": 763,
                    "y": 11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X65A",
                    "type": "ASTEROID",
                    "x": 590,
                    "y": 400,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z56X",
                    "type": "ASTEROID",
                    "x": 729,
                    "y": -208,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z58F",
                    "type": "ASTEROID",
                    "x": 572,
                    "y": -442,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z60B",
                    "type": "ASTEROID",
                    "x": 744,
                    "y": -163,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-BE9A",
                    "type": "ASTEROID",
                    "x": 67,
                    "y": -342,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E43F",
                    "type": "ASTEROID",
                    "x": -586,
                    "y": -475,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-ZA4F",
                    "type": "ASTEROID",
                    "x": -194,
                    "y": -330,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z46C",
                    "type": "ASTEROID",
                    "x": -443,
                    "y": -593,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-AB3D",
                    "type": "ASTEROID",
                    "x": -154,
                    "y": -336,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F41D",
                    "type": "ASTEROID",
                    "x": -520,
                    "y": -496,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X12F",
                    "type": "ASTEROID",
                    "x": 225,
                    "y": -227,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E47F",
                    "type": "ASTEROID",
                    "x": -194,
                    "y": -711,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z14D",
                    "type": "ASTEROID",
                    "x": 312,
                    "y": 125,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F52F",
                    "type": "ASTEROID",
                    "x": -26,
                    "y": -736,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X53C",
                    "type": "ASTEROID",
                    "x": 300,
                    "y": -708,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F55D",
                    "type": "ASTEROID",
                    "x": 140,
                    "y": -748,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E69F",
                    "type": "ASTEROID",
                    "x": 333,
                    "y": 671,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z18A",
                    "type": "ASTEROID",
                    "x": -82,
                    "y": 345,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X33Z",
                    "type": "ASTEROID",
                    "x": -133,
                    "y": 722,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B36A",
                    "type": "ASTEROID",
                    "x": -505,
                    "y": 512,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F38X",
                    "type": "ASTEROID",
                    "x": -665,
                    "y": 273,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B27B",
                    "type": "ASTEROID",
                    "x": 83,
                    "y": 733,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-D31D",
                    "type": "ASTEROID",
                    "x": 203,
                    "y": 700,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-DF1A",
                    "type": "ASTEROID",
                    "x": -339,
                    "y": 164,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B10C",
                    "type": "ASTEROID",
                    "x": 308,
                    "y": -225,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-BC5X",
                    "type": "ASTEROID",
                    "x": -263,
                    "y": -229,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E13X",
                    "type": "ASTEROID",
                    "x": 301,
                    "y": -128,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-AB7D",
                    "type": "ASTEROID",
                    "x": -46,
                    "y": -307,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B16X",
                    "type": "ASTEROID",
                    "x": 220,
                    "y": 271,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z66Z",
                    "type": "ASTEROID",
                    "x": 713,
                    "y": 105,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-FE6D",
                    "type": "ASTEROID",
                    "x": -89,
                    "y": -339,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-C15E",
                    "type": "ASTEROID",
                    "x": 207,
                    "y": 295,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z62E",
                    "type": "ASTEROID",
                    "x": 620,
                    "y": -489,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z54E",
                    "type": "ASTEROID",
                    "x": 523,
                    "y": -514,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z68X",
                    "type": "ASTEROID",
                    "x": 189,
                    "y": 752,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E59X",
                    "type": "ASTEROID",
                    "x": 673,
                    "y": -336,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z61X",
                    "type": "ASTEROID",
                    "x": 741,
                    "y": 185,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-D35D",
                    "type": "ASTEROID",
                    "x": -755,
                    "y": 172,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-D24C",
                    "type": "ASTEROID",
                    "x": -260,
                    "y": 287,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-D26C",
                    "type": "JUMP_GATE",
                    "x": 403,
                    "y": -205,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X51Z",
                    "type": "ASTEROID",
                    "x": -200,
                    "y": -760,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F64C",
                    "type": "ASTEROID",
                    "x": 778,
                    "y": -130,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-Z67A",
                    "type": "ASTEROID",
                    "x": 745,
                    "y": 199,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-A70C",
                    "type": "ASTEROID",
                    "x": 281,
                    "y": 694,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F19F",
                    "type": "ASTEROID",
                    "x": 133,
                    "y": 328,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B21E",
                    "type": "ASTEROID",
                    "x": -122,
                    "y": 320,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F23E",
                    "type": "ASTEROID",
                    "x": -266,
                    "y": 257,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F39B",
                    "type": "ASTEROID",
                    "x": -644,
                    "y": 439,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-C28D",
                    "type": "ASTEROID",
                    "x": 162,
                    "y": 728,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-A32E",
                    "type": "ASTEROID",
                    "x": -67,
                    "y": 778,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E57E",
                    "type": "ASTEROID",
                    "x": 694,
                    "y": -332,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E17F",
                    "type": "ASTEROID",
                    "x": 286,
                    "y": 253,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B20Z",
                    "type": "ASTEROID",
                    "x": -39,
                    "y": 337,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-A37F",
                    "type": "ASTEROID",
                    "x": -691,
                    "y": 341,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-D25Z",
                    "type": "ASTEROID",
                    "x": -352,
                    "y": -140,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-B29C",
                    "type": "ASTEROID",
                    "x": 414,
                    "y": 655,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-F34F",
                    "type": "ASTEROID",
                    "x": -144,
                    "y": 754,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-X22A",
                    "type": "ASTEROID",
                    "x": -42,
                    "y": 335,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-E40F",
                    "type": "ASTEROID",
                    "x": -680,
                    "y": 209,
                    "orbitals": []
                },
                {
                    "symbol": "X1-FF5-A30D",
                    "type": "ASTEROID",
                    "x": 57,
                    "y": 733,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QC9",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": -1431,
            "y": 1877,
            "waypoints": [
                {
                    "symbol": "X1-QC9-ZD1E",
                    "type": "GAS_GIANT",
                    "x": 11,
                    "y": 7,
                    "orbitals": [
                        {
                            "symbol": "X1-QC9-DZ2B"
                        }
                    ]
                },
                {
                    "symbol": "X1-QC9-CE8E",
                    "type": "ASTEROID",
                    "x": 99,
                    "y": -765,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-FE4A",
                    "type": "MOON",
                    "x": 1,
                    "y": 22,
                    "orbitals": [],
                    "orbits": "X1-QC9-BZ3C"
                },
                {
                    "symbol": "X1-QC9-CA7D",
                    "type": "ASTEROID",
                    "x": -379,
                    "y": -645,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-X10F",
                    "type": "ASTEROID",
                    "x": 689,
                    "y": 341,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-BD5D",
                    "type": "MOON",
                    "x": 1,
                    "y": 22,
                    "orbitals": [],
                    "orbits": "X1-QC9-BZ3C"
                },
                {
                    "symbol": "X1-QC9-B11Z",
                    "type": "ASTEROID",
                    "x": 612,
                    "y": 425,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-Z13Z",
                    "type": "ASTEROID",
                    "x": -707,
                    "y": -182,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-BZ3C",
                    "type": "GAS_GIANT",
                    "x": 1,
                    "y": 22,
                    "orbitals": [
                        {
                            "symbol": "X1-QC9-FE4A"
                        },
                        {
                            "symbol": "X1-QC9-BD5D"
                        }
                    ]
                },
                {
                    "symbol": "X1-QC9-BE9E",
                    "type": "ASTEROID",
                    "x": 766,
                    "y": -50,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-DZ2B",
                    "type": "MOON",
                    "x": 11,
                    "y": 7,
                    "orbitals": [],
                    "orbits": "X1-QC9-ZD1E"
                },
                {
                    "symbol": "X1-QC9-EX6D",
                    "type": "ASTEROID",
                    "x": -409,
                    "y": -597,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QC9-Z12A",
                    "type": "ASTEROID",
                    "x": -446,
                    "y": 589,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QY60",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": -1603,
            "y": 931,
            "waypoints": [
                {
                    "symbol": "X1-QY60-DC2F",
                    "type": "GAS_GIANT",
                    "x": 35,
                    "y": 24,
                    "orbitals": [
                        {
                            "symbol": "X1-QY60-DZ3A"
                        }
                    ]
                },
                {
                    "symbol": "X1-QY60-EZ6Z",
                    "type": "ASTEROID",
                    "x": -550,
                    "y": 448,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-AD9D",
                    "type": "ASTEROID",
                    "x": -461,
                    "y": -616,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-FD5C",
                    "type": "ASTEROID",
                    "x": 715,
                    "y": 213,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-Z12F",
                    "type": "ASTEROID",
                    "x": 636,
                    "y": -349,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-DB7Z",
                    "type": "ASTEROID",
                    "x": -742,
                    "y": -120,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-DZ3A",
                    "type": "MOON",
                    "x": 35,
                    "y": 24,
                    "orbitals": [],
                    "orbits": "X1-QY60-DC2F"
                },
                {
                    "symbol": "X1-QY60-ZA1A",
                    "type": "PLANET",
                    "x": 4,
                    "y": 11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-FX4C",
                    "type": "ASTEROID",
                    "x": 774,
                    "y": 23,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-F11A",
                    "type": "ASTEROID",
                    "x": 174,
                    "y": -704,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-X10D",
                    "type": "ASTEROID",
                    "x": 355,
                    "y": -619,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QY60-DB8B",
                    "type": "ASTEROID",
                    "x": 193,
                    "y": -695,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-GD19",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": 1809,
            "y": -2388,
            "waypoints": [
                {
                    "symbol": "X1-GD19-D11F",
                    "type": "ASTEROID",
                    "x": 707,
                    "y": 143,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-X13F",
                    "type": "ASTEROID",
                    "x": -489,
                    "y": 595,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-FD8A",
                    "type": "ASTEROID",
                    "x": 433,
                    "y": -650,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-F12F",
                    "type": "ASTEROID",
                    "x": 482,
                    "y": 529,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-DB5D",
                    "type": "ASTEROID",
                    "x": -776,
                    "y": 134,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-DD1D",
                    "type": "PLANET",
                    "x": 12,
                    "y": 11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-CX4D",
                    "type": "ASTEROID",
                    "x": -298,
                    "y": 665,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-ZF7X",
                    "type": "ASTEROID",
                    "x": -283,
                    "y": -660,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-FX3F",
                    "type": "ASTEROID",
                    "x": 382,
                    "y": 600,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-X10Z",
                    "type": "ASTEROID",
                    "x": -97,
                    "y": -732,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-DB6X",
                    "type": "ASTEROID",
                    "x": -591,
                    "y": -521,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-AF2A",
                    "type": "PLANET",
                    "x": -36,
                    "y": 7,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GD19-ZC9Z",
                    "type": "ASTEROID",
                    "x": 262,
                    "y": -661,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QX38",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": 3882,
            "y": 3053,
            "waypoints": [
                {
                    "symbol": "X1-QX38-AF1Z",
                    "type": "ASTEROID",
                    "x": 352,
                    "y": -147,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-D11Z",
                    "type": "ASTEROID",
                    "x": -155,
                    "y": 294,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-D45A",
                    "type": "ASTEROID",
                    "x": 340,
                    "y": -670,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-XA5X",
                    "type": "ASTEROID",
                    "x": 358,
                    "y": -11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C17C",
                    "type": "ASTEROID",
                    "x": -302,
                    "y": -95,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-DB8Z",
                    "type": "ASTEROID",
                    "x": 269,
                    "y": 177,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E20Z",
                    "type": "ASTEROID",
                    "x": -110,
                    "y": -344,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C69X",
                    "type": "ASTEROID",
                    "x": 25,
                    "y": 717,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z71A",
                    "type": "ASTEROID",
                    "x": -440,
                    "y": 642,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-B24B",
                    "type": "JUMP_GATE",
                    "x": 355,
                    "y": -274,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-XX3Z",
                    "type": "ASTEROID",
                    "x": 357,
                    "y": -40,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z44F",
                    "type": "ASTEROID",
                    "x": 398,
                    "y": -626,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-ZB4Z",
                    "type": "ASTEROID",
                    "x": 340,
                    "y": -79,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E16A",
                    "type": "ASTEROID",
                    "x": -321,
                    "y": 18,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C51E",
                    "type": "ASTEROID",
                    "x": 206,
                    "y": -716,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-ZE7X",
                    "type": "ASTEROID",
                    "x": 335,
                    "y": 149,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-D19F",
                    "type": "ASTEROID",
                    "x": -171,
                    "y": -307,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z66C",
                    "type": "ASTEROID",
                    "x": 211,
                    "y": 749,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-A68E",
                    "type": "ASTEROID",
                    "x": 357,
                    "y": 699,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E61F",
                    "type": "ASTEROID",
                    "x": 351,
                    "y": 630,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z63D",
                    "type": "ASTEROID",
                    "x": 675,
                    "y": 388,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F65A",
                    "type": "ASTEROID",
                    "x": -25,
                    "y": 768,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F36A",
                    "type": "ASTEROID",
                    "x": -558,
                    "y": -475,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C29B",
                    "type": "ASTEROID",
                    "x": -335,
                    "y": 662,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C32C",
                    "type": "ASTEROID",
                    "x": -759,
                    "y": 42,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X39B",
                    "type": "ASTEROID",
                    "x": -481,
                    "y": -533,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C10X",
                    "type": "ASTEROID",
                    "x": 9,
                    "y": 355,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-D42F",
                    "type": "ASTEROID",
                    "x": 80,
                    "y": -726,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F13Z",
                    "type": "ASTEROID",
                    "x": -122,
                    "y": 316,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C47Z",
                    "type": "ASTEROID",
                    "x": 512,
                    "y": -564,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-D15Z",
                    "type": "ASTEROID",
                    "x": -304,
                    "y": 218,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X53D",
                    "type": "ASTEROID",
                    "x": 668,
                    "y": -335,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C18F",
                    "type": "ASTEROID",
                    "x": -183,
                    "y": -266,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E56C",
                    "type": "ASTEROID",
                    "x": 734,
                    "y": 74,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E67E",
                    "type": "ASTEROID",
                    "x": 535,
                    "y": 527,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-D60F",
                    "type": "ASTEROID",
                    "x": 548,
                    "y": 555,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-B62D",
                    "type": "ASTEROID",
                    "x": 416,
                    "y": 598,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E26E",
                    "type": "ASTEROID",
                    "x": -550,
                    "y": 528,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C27F",
                    "type": "ASTEROID",
                    "x": -348,
                    "y": 693,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-B38Z",
                    "type": "ASTEROID",
                    "x": -390,
                    "y": -685,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z41Z",
                    "type": "ASTEROID",
                    "x": -281,
                    "y": -702,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-BF2C",
                    "type": "ASTEROID",
                    "x": 110,
                    "y": -309,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F12Z",
                    "type": "ASTEROID",
                    "x": -37,
                    "y": 331,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C14B",
                    "type": "ASTEROID",
                    "x": -358,
                    "y": -84,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X48B",
                    "type": "ASTEROID",
                    "x": -28,
                    "y": -751,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F50Z",
                    "type": "ASTEROID",
                    "x": 639,
                    "y": -397,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F52C",
                    "type": "ASTEROID",
                    "x": 696,
                    "y": -168,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-B55C",
                    "type": "ASTEROID",
                    "x": 763,
                    "y": 157,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C58E",
                    "type": "ASTEROID",
                    "x": 730,
                    "y": -23,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z59C",
                    "type": "ASTEROID",
                    "x": 571,
                    "y": 468,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X22F",
                    "type": "ASTEROID",
                    "x": -206,
                    "y": -300,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-A23D",
                    "type": "ASTEROID",
                    "x": -32,
                    "y": -344,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X64Z",
                    "type": "ASTEROID",
                    "x": 655,
                    "y": 407,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X34B",
                    "type": "ASTEROID",
                    "x": -648,
                    "y": 359,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E28B",
                    "type": "ASTEROID",
                    "x": -238,
                    "y": 708,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F30E",
                    "type": "ASTEROID",
                    "x": -710,
                    "y": -154,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-C33C",
                    "type": "ASTEROID",
                    "x": -738,
                    "y": -72,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-CZ9D",
                    "type": "ASTEROID",
                    "x": 17,
                    "y": 315,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E43A",
                    "type": "ASTEROID",
                    "x": 132,
                    "y": -749,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E46E",
                    "type": "ASTEROID",
                    "x": 59,
                    "y": -751,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E49Z",
                    "type": "ASTEROID",
                    "x": 596,
                    "y": -455,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-ZZ6X",
                    "type": "ASTEROID",
                    "x": 341,
                    "y": 123,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E54D",
                    "type": "ASTEROID",
                    "x": 655,
                    "y": -300,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-E57B",
                    "type": "ASTEROID",
                    "x": 748,
                    "y": 210,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-A21F",
                    "type": "ASTEROID",
                    "x": -215,
                    "y": -229,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X70D",
                    "type": "ASTEROID",
                    "x": -128,
                    "y": 718,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z72D",
                    "type": "ASTEROID",
                    "x": 56,
                    "y": 737,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F25B",
                    "type": "ASTEROID",
                    "x": -467,
                    "y": 540,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-A35D",
                    "type": "ASTEROID",
                    "x": -695,
                    "y": 155,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-X37C",
                    "type": "ASTEROID",
                    "x": -731,
                    "y": -31,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-F31D",
                    "type": "ASTEROID",
                    "x": -498,
                    "y": 517,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QX38-Z40B",
                    "type": "ASTEROID",
                    "x": -563,
                    "y": -431,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-PF92",
            "sectorSymbol": "X1",
            "type": "YOUNG_STAR",
            "x": -6670,
            "y": -2259,
            "waypoints": [
                {
                    "symbol": "X1-PF92-BB4C",
                    "type": "PLANET",
                    "x": 52,
                    "y": 34,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-CD7X",
                    "type": "ASTEROID",
                    "x": 106,
                    "y": 707,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-BE9E",
                    "type": "ASTEROID",
                    "x": -722,
                    "y": 193,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-FE5E",
                    "type": "GAS_GIANT",
                    "x": 79,
                    "y": 37,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-CX8X",
                    "type": "ASTEROID",
                    "x": -506,
                    "y": 516,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-B11F",
                    "type": "ASTEROID",
                    "x": 57,
                    "y": -744,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-EZ3D",
                    "type": "PLANET",
                    "x": -38,
                    "y": -15,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-A15X",
                    "type": "ASTEROID",
                    "x": 722,
                    "y": 95,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-D17F",
                    "type": "ASTEROID",
                    "x": 347,
                    "y": 633,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-EE6D",
                    "type": "ASTEROID",
                    "x": 651,
                    "y": 294,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-X14F",
                    "type": "ASTEROID",
                    "x": 721,
                    "y": -162,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-F10A",
                    "type": "ASTEROID",
                    "x": -616,
                    "y": -474,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-AA1F",
                    "type": "PLANET",
                    "x": 18,
                    "y": 0,
                    "orbitals": [
                        {
                            "symbol": "X1-PF92-DB2F"
                        }
                    ]
                },
                {
                    "symbol": "X1-PF92-D13D",
                    "type": "ASTEROID",
                    "x": 536,
                    "y": -517,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-Z16F",
                    "type": "ASTEROID",
                    "x": 753,
                    "y": 171,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-X12E",
                    "type": "ASTEROID",
                    "x": 715,
                    "y": -261,
                    "orbitals": []
                },
                {
                    "symbol": "X1-PF92-DB2F",
                    "type": "MOON",
                    "x": 18,
                    "y": 0,
                    "orbitals": [],
                    "orbits": "X1-PF92-AA1F"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-KD30",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 2742,
            "y": -1913,
            "waypoints": [
                {
                    "symbol": "X1-KD30-X10Z",
                    "type": "ASTEROID",
                    "x": 463,
                    "y": -544,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-DC7E",
                    "type": "ASTEROID",
                    "x": -125,
                    "y": 754,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-BX2C",
                    "type": "MOON",
                    "x": -9,
                    "y": 5,
                    "orbitals": [],
                    "orbits": "X1-KD30-XB1E"
                },
                {
                    "symbol": "X1-KD30-AC3A",
                    "type": "ASTEROID",
                    "x": 758,
                    "y": -220,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-DE6C",
                    "type": "ASTEROID",
                    "x": -358,
                    "y": 673,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-EX8F",
                    "type": "ASTEROID",
                    "x": -586,
                    "y": 511,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-XB4C",
                    "type": "ASTEROID",
                    "x": 775,
                    "y": -56,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-XX5E",
                    "type": "ASTEROID",
                    "x": 370,
                    "y": 648,
                    "orbitals": []
                },
                {
                    "symbol": "X1-KD30-XB1E",
                    "type": "PLANET",
                    "x": -9,
                    "y": 5,
                    "orbitals": [
                        {
                            "symbol": "X1-KD30-BX2C"
                        }
                    ]
                },
                {
                    "symbol": "X1-KD30-CX9E",
                    "type": "ASTEROID",
                    "x": -609,
                    "y": -470,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-HC37",
            "sectorSymbol": "X1",
            "type": "WHITE_DWARF",
            "x": 6398,
            "y": 840,
            "waypoints": [],
            "factions": []
        },
        {
            "symbol": "X1-RK18",
            "sectorSymbol": "X1",
            "type": "RED_STAR",
            "x": -636,
            "y": 423,
            "waypoints": [
                {
                    "symbol": "X1-RK18-EC1B",
                    "type": "PLANET",
                    "x": -1,
                    "y": 17,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F36D",
                    "type": "ASTEROID",
                    "x": 6,
                    "y": 783,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F39C",
                    "type": "ASTEROID",
                    "x": -768,
                    "y": 181,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F13A",
                    "type": "ASTEROID",
                    "x": -372,
                    "y": -104,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F42X",
                    "type": "ASTEROID",
                    "x": -439,
                    "y": -617,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-Z43D",
                    "type": "ASTEROID",
                    "x": -720,
                    "y": -189,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-E51E",
                    "type": "ASTEROID",
                    "x": 765,
                    "y": -47,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-X53B",
                    "type": "ASTEROID",
                    "x": 371,
                    "y": 656,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D17F",
                    "type": "ASTEROID",
                    "x": -217,
                    "y": -287,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F18B",
                    "type": "ASTEROID",
                    "x": -205,
                    "y": -242,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D20X",
                    "type": "ASTEROID",
                    "x": 185,
                    "y": -272,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A24E",
                    "type": "ASTEROID",
                    "x": 310,
                    "y": -173,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-E27X",
                    "type": "ASTEROID",
                    "x": 330,
                    "y": 31,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-CB4Z",
                    "type": "MOON",
                    "x": 48,
                    "y": -53,
                    "orbitals": [],
                    "orbits": "X1-RK18-ZC3E"
                },
                {
                    "symbol": "X1-RK18-B10Z",
                    "type": "ASTEROID",
                    "x": 33,
                    "y": 322,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-ZC3E",
                    "type": "PLANET",
                    "x": 48,
                    "y": -53,
                    "orbitals": [
                        {
                            "symbol": "X1-RK18-CB4Z"
                        }
                    ]
                },
                {
                    "symbol": "X1-RK18-FF9B",
                    "type": "ASTEROID",
                    "x": 238,
                    "y": 215,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-Z15F",
                    "type": "ASTEROID",
                    "x": -336,
                    "y": 3,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D16E",
                    "type": "ASTEROID",
                    "x": -361,
                    "y": -9,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-E54A",
                    "type": "ASTEROID",
                    "x": 652,
                    "y": 397,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-B50F",
                    "type": "ASTEROID",
                    "x": 707,
                    "y": -299,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-C26Z",
                    "type": "ASTEROID",
                    "x": 312,
                    "y": -76,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F32E",
                    "type": "ASTEROID",
                    "x": 308,
                    "y": 110,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-C35A",
                    "type": "ASTEROID",
                    "x": -108,
                    "y": 708,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D11A",
                    "type": "ASTEROID",
                    "x": -306,
                    "y": 210,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A38E",
                    "type": "ASTEROID",
                    "x": -528,
                    "y": 550,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-XZ8A",
                    "type": "FUEL_STATION",
                    "x": 228,
                    "y": -24,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-B48E",
                    "type": "ASTEROID",
                    "x": 328,
                    "y": -674,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-E19F",
                    "type": "ASTEROID",
                    "x": -4,
                    "y": -341,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-C25A",
                    "type": "ASTEROID",
                    "x": 321,
                    "y": -110,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-F29E",
                    "type": "ASTEROID",
                    "x": 313,
                    "y": 189,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-FB2X",
                    "type": "PLANET",
                    "x": 32,
                    "y": 31,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-Z37Z",
                    "type": "ASTEROID",
                    "x": -665,
                    "y": 323,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-X12C",
                    "type": "ASTEROID",
                    "x": -296,
                    "y": 192,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-C40F",
                    "type": "ASTEROID",
                    "x": -759,
                    "y": -66,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-Z41X",
                    "type": "ASTEROID",
                    "x": -648,
                    "y": -365,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-Z14C",
                    "type": "ASTEROID",
                    "x": -301,
                    "y": 105,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-C44B",
                    "type": "ASTEROID",
                    "x": -702,
                    "y": -313,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-X52B",
                    "type": "ASTEROID",
                    "x": 735,
                    "y": 264,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A55Z",
                    "type": "ASTEROID",
                    "x": 17,
                    "y": 762,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A49A",
                    "type": "ASTEROID",
                    "x": 582,
                    "y": -524,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-B28F",
                    "type": "ASTEROID",
                    "x": 329,
                    "y": -45,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A22F",
                    "type": "ASTEROID",
                    "x": -77,
                    "y": -346,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A31B",
                    "type": "ASTEROID",
                    "x": 354,
                    "y": 54,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-A34D",
                    "type": "ASTEROID",
                    "x": 269,
                    "y": 714,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-AZ5F",
                    "type": "GAS_GIANT",
                    "x": 0,
                    "y": 88,
                    "orbitals": [
                        {
                            "symbol": "X1-RK18-ZC6X"
                        }
                    ]
                },
                {
                    "symbol": "X1-RK18-BD7A",
                    "type": "JUMP_GATE",
                    "x": 446,
                    "y": -48,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D45D",
                    "type": "ASTEROID",
                    "x": -415,
                    "y": -598,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-Z46E",
                    "type": "ASTEROID",
                    "x": 233,
                    "y": -736,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D47A",
                    "type": "ASTEROID",
                    "x": -205,
                    "y": -759,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D21C",
                    "type": "ASTEROID",
                    "x": 201,
                    "y": -287,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-C23D",
                    "type": "ASTEROID",
                    "x": 125,
                    "y": -360,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-E30F",
                    "type": "ASTEROID",
                    "x": 346,
                    "y": -153,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-D33X",
                    "type": "ASTEROID",
                    "x": 293,
                    "y": 206,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK18-ZC6X",
                    "type": "MOON",
                    "x": 0,
                    "y": 88,
                    "orbitals": [],
                    "orbits": "X1-RK18-AZ5F"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QY89",
            "sectorSymbol": "X1",
            "type": "BLACK_HOLE",
            "x": -359,
            "y": -1037,
            "waypoints": [],
            "factions": []
        },
        {
            "symbol": "X1-RG68",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 694,
            "y": -1435,
            "waypoints": [
                {
                    "symbol": "X1-RG68-ED1A",
                    "type": "ASTEROID",
                    "x": -235,
                    "y": -308,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X10C",
                    "type": "ASTEROID",
                    "x": 374,
                    "y": 99,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A13D",
                    "type": "ASTEROID",
                    "x": -205,
                    "y": 311,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-CF6Z",
                    "type": "ASTEROID",
                    "x": 285,
                    "y": -209,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-ZD8D",
                    "type": "ASTEROID",
                    "x": 343,
                    "y": -21,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X11Z",
                    "type": "ASTEROID",
                    "x": 19,
                    "y": 337,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A43E",
                    "type": "ASTEROID",
                    "x": -595,
                    "y": 450,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-B45F",
                    "type": "ASTEROID",
                    "x": -510,
                    "y": 552,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X47A",
                    "type": "ASTEROID",
                    "x": -465,
                    "y": 550,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-B60X",
                    "type": "ASTEROID",
                    "x": -394,
                    "y": -658,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z62B",
                    "type": "ASTEROID",
                    "x": -167,
                    "y": -697,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-B64Z",
                    "type": "ASTEROID",
                    "x": 435,
                    "y": -607,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-F67X",
                    "type": "ASTEROID",
                    "x": 643,
                    "y": -387,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-FX5B",
                    "type": "ASTEROID",
                    "x": 258,
                    "y": -228,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-AF2X",
                    "type": "ASTEROID",
                    "x": -89,
                    "y": -369,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A41C",
                    "type": "ASTEROID",
                    "x": -295,
                    "y": 711,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A44E",
                    "type": "ASTEROID",
                    "x": -657,
                    "y": 362,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E48A",
                    "type": "ASTEROID",
                    "x": -706,
                    "y": 203,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E49F",
                    "type": "ASTEROID",
                    "x": -735,
                    "y": 292,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E19A",
                    "type": "ASTEROID",
                    "x": -360,
                    "y": -51,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-D65C",
                    "type": "ASTEROID",
                    "x": 304,
                    "y": -669,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X54C",
                    "type": "ASTEROID",
                    "x": -527,
                    "y": -547,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z58B",
                    "type": "ASTEROID",
                    "x": -542,
                    "y": -468,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-B23D",
                    "type": "ASTEROID",
                    "x": 673,
                    "y": -307,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C36E",
                    "type": "ASTEROID",
                    "x": 704,
                    "y": 327,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A39A",
                    "type": "ASTEROID",
                    "x": 243,
                    "y": 704,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C29X",
                    "type": "ASTEROID",
                    "x": 711,
                    "y": 143,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-BX9X",
                    "type": "ASTEROID",
                    "x": 348,
                    "y": 90,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-ZZ3C",
                    "type": "ASTEROID",
                    "x": 115,
                    "y": -324,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-F42A",
                    "type": "ASTEROID",
                    "x": -461,
                    "y": 603,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E15B",
                    "type": "ASTEROID",
                    "x": -142,
                    "y": 316,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C16X",
                    "type": "ASTEROID",
                    "x": -281,
                    "y": 130,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-F18B",
                    "type": "ASTEROID",
                    "x": -334,
                    "y": -13,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E51X",
                    "type": "ASTEROID",
                    "x": -682,
                    "y": -274,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E66A",
                    "type": "ASTEROID",
                    "x": 90,
                    "y": -721,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z57F",
                    "type": "ASTEROID",
                    "x": -324,
                    "y": -695,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-EA4Z",
                    "type": "ASTEROID",
                    "x": 81,
                    "y": -328,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z12F",
                    "type": "ASTEROID",
                    "x": 154,
                    "y": 284,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X14Z",
                    "type": "ASTEROID",
                    "x": -17,
                    "y": 315,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-D46F",
                    "type": "ASTEROID",
                    "x": -586,
                    "y": 502,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C17C",
                    "type": "ASTEROID",
                    "x": -306,
                    "y": 106,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X61B",
                    "type": "ASTEROID",
                    "x": 31,
                    "y": -727,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A63B",
                    "type": "ASTEROID",
                    "x": -87,
                    "y": -759,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X52D",
                    "type": "ASTEROID",
                    "x": -767,
                    "y": 57,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z55A",
                    "type": "ASTEROID",
                    "x": -316,
                    "y": -693,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C32F",
                    "type": "ASTEROID",
                    "x": 763,
                    "y": -74,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-D34E",
                    "type": "ASTEROID",
                    "x": 465,
                    "y": 550,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E25E",
                    "type": "ASTEROID",
                    "x": 516,
                    "y": -488,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-D38E",
                    "type": "ASTEROID",
                    "x": -33,
                    "y": 722,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-B40C",
                    "type": "ASTEROID",
                    "x": -272,
                    "y": 671,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-EZ7D",
                    "type": "ASTEROID",
                    "x": 346,
                    "y": -108,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-A59X",
                    "type": "ASTEROID",
                    "x": 151,
                    "y": -765,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X50C",
                    "type": "ASTEROID",
                    "x": -575,
                    "y": 424,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E20F",
                    "type": "ASTEROID",
                    "x": -264,
                    "y": -190,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-D53C",
                    "type": "ASTEROID",
                    "x": -688,
                    "y": -345,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-D56Z",
                    "type": "ASTEROID",
                    "x": 8,
                    "y": -711,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X21Z",
                    "type": "ASTEROID",
                    "x": 42,
                    "y": -320,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-B35C",
                    "type": "ASTEROID",
                    "x": 632,
                    "y": 350,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C37D",
                    "type": "ASTEROID",
                    "x": 629,
                    "y": 474,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C27A",
                    "type": "ASTEROID",
                    "x": 757,
                    "y": 107,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C30Z",
                    "type": "ASTEROID",
                    "x": 565,
                    "y": 441,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X33Z",
                    "type": "ASTEROID",
                    "x": 391,
                    "y": 635,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-X24X",
                    "type": "ASTEROID",
                    "x": 456,
                    "y": -608,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z26C",
                    "type": "ASTEROID",
                    "x": 657,
                    "y": -376,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-E28D",
                    "type": "ASTEROID",
                    "x": 731,
                    "y": 153,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-C31B",
                    "type": "ASTEROID",
                    "x": 719,
                    "y": 46,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RG68-Z22A",
                    "type": "JUMP_GATE",
                    "x": 444,
                    "y": 85,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-RF4",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": -2800,
            "y": 1931,
            "waypoints": [
                {
                    "symbol": "X1-RF4-A10X",
                    "type": "ASTEROID",
                    "x": -766,
                    "y": -5,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-EF5B",
                    "type": "ASTEROID",
                    "x": 258,
                    "y": 735,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-AA3F",
                    "type": "ASTEROID",
                    "x": 751,
                    "y": -48,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-EZ4Z",
                    "type": "ASTEROID",
                    "x": 776,
                    "y": 147,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-F11A",
                    "type": "ASTEROID",
                    "x": -594,
                    "y": -493,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-DZ1B",
                    "type": "GAS_GIANT",
                    "x": 4,
                    "y": -9,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-AF2B",
                    "type": "ASTEROID",
                    "x": -220,
                    "y": -675,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-CE6C",
                    "type": "ASTEROID",
                    "x": -167,
                    "y": 742,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-BE9Z",
                    "type": "ASTEROID",
                    "x": -744,
                    "y": -98,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-DX8C",
                    "type": "ASTEROID",
                    "x": -665,
                    "y": 412,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RF4-CB7B",
                    "type": "ASTEROID",
                    "x": -754,
                    "y": 222,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-RK5",
            "sectorSymbol": "X1",
            "type": "YOUNG_STAR",
            "x": 2518,
            "y": -1793,
            "waypoints": [
                {
                    "symbol": "X1-RK5-BB6A",
                    "type": "GAS_GIANT",
                    "x": 20,
                    "y": -79,
                    "orbitals": [
                        {
                            "symbol": "X1-RK5-CC7A"
                        }
                    ]
                },
                {
                    "symbol": "X1-RK5-X17Z",
                    "type": "ASTEROID",
                    "x": 450,
                    "y": -639,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-B11A",
                    "type": "ASTEROID",
                    "x": 375,
                    "y": 663,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-ZC5B",
                    "type": "MOON",
                    "x": 30,
                    "y": 49,
                    "orbitals": [],
                    "orbits": "X1-RK5-BZ4Z"
                },
                {
                    "symbol": "X1-RK5-BZ4Z",
                    "type": "GAS_GIANT",
                    "x": 30,
                    "y": 49,
                    "orbitals": [
                        {
                            "symbol": "X1-RK5-ZC5B"
                        }
                    ]
                },
                {
                    "symbol": "X1-RK5-A15A",
                    "type": "ASTEROID",
                    "x": -492,
                    "y": 608,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-CA8D",
                    "type": "ASTEROID",
                    "x": -674,
                    "y": -368,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-A13Z",
                    "type": "ASTEROID",
                    "x": -509,
                    "y": 574,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-Z16F",
                    "type": "ASTEROID",
                    "x": -657,
                    "y": -346,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-BZ1D",
                    "type": "PLANET",
                    "x": 8,
                    "y": -9,
                    "orbitals": [
                        {
                            "symbol": "X1-RK5-XB2D"
                        }
                    ]
                },
                {
                    "symbol": "X1-RK5-BF3F",
                    "type": "PLANET",
                    "x": 35,
                    "y": -15,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-BF9B",
                    "type": "ASTEROID",
                    "x": 62,
                    "y": -733,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-XB2D",
                    "type": "MOON",
                    "x": 8,
                    "y": -9,
                    "orbitals": [],
                    "orbits": "X1-RK5-BZ1D"
                },
                {
                    "symbol": "X1-RK5-A14E",
                    "type": "ASTEROID",
                    "x": -204,
                    "y": 732,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-A10A",
                    "type": "ASTEROID",
                    "x": 685,
                    "y": 203,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-C12D",
                    "type": "ASTEROID",
                    "x": 190,
                    "y": 730,
                    "orbitals": []
                },
                {
                    "symbol": "X1-RK5-CC7A",
                    "type": "MOON",
                    "x": 20,
                    "y": -79,
                    "orbitals": [],
                    "orbits": "X1-RK5-BB6A"
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-GH80",
            "sectorSymbol": "X1",
            "type": "ORANGE_STAR",
            "x": 2220,
            "y": 3030,
            "waypoints": [
                {
                    "symbol": "X1-GH80-EC7E",
                    "type": "ASTEROID",
                    "x": -447,
                    "y": -609,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-FB9Z",
                    "type": "ASTEROID",
                    "x": 207,
                    "y": -741,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-EZ2F",
                    "type": "MOON",
                    "x": 13,
                    "y": 4,
                    "orbitals": [],
                    "orbits": "X1-GH80-ZB1B"
                },
                {
                    "symbol": "X1-GH80-B11D",
                    "type": "ASTEROID",
                    "x": 404,
                    "y": 602,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-EZ8E",
                    "type": "ASTEROID",
                    "x": 560,
                    "y": -529,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-B10E",
                    "type": "ASTEROID",
                    "x": 695,
                    "y": -166,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-FZ6X",
                    "type": "ASTEROID",
                    "x": -782,
                    "y": -15,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-ZB1B",
                    "type": "PLANET",
                    "x": 13,
                    "y": 4,
                    "orbitals": [
                        {
                            "symbol": "X1-GH80-EZ2F"
                        }
                    ]
                },
                {
                    "symbol": "X1-GH80-ZC5A",
                    "type": "ASTEROID",
                    "x": -678,
                    "y": 249,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-FF3X",
                    "type": "ASTEROID",
                    "x": 282,
                    "y": 684,
                    "orbitals": []
                },
                {
                    "symbol": "X1-GH80-BF4X",
                    "type": "ASTEROID",
                    "x": 193,
                    "y": 705,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-QG15",
            "sectorSymbol": "X1",
            "type": "BLUE_STAR",
            "x": 1630,
            "y": -1352,
            "waypoints": [
                {
                    "symbol": "X1-QG15-AD1A",
                    "type": "ASTEROID",
                    "x": 276,
                    "y": 148,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-EA8B",
                    "type": "ASTEROID",
                    "x": -315,
                    "y": 182,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-EZ4D",
                    "type": "ASTEROID",
                    "x": 164,
                    "y": 303,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C11Z",
                    "type": "ASTEROID",
                    "x": -274,
                    "y": -191,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A49B",
                    "type": "ASTEROID",
                    "x": -767,
                    "y": -169,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A53D",
                    "type": "ASTEROID",
                    "x": -371,
                    "y": -696,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C18D",
                    "type": "ASTEROID",
                    "x": 331,
                    "y": -199,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X59F",
                    "type": "ASTEROID",
                    "x": 356,
                    "y": -638,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X70Z",
                    "type": "ASTEROID",
                    "x": 713,
                    "y": -135,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X21E",
                    "type": "ASTEROID",
                    "x": 315,
                    "y": 70,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C22D",
                    "type": "ASTEROID",
                    "x": 387,
                    "y": 29,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F66E",
                    "type": "ASTEROID",
                    "x": 701,
                    "y": -259,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X36F",
                    "type": "ASTEROID",
                    "x": -121,
                    "y": 749,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X27C",
                    "type": "ASTEROID",
                    "x": 594,
                    "y": 438,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B29C",
                    "type": "ASTEROID",
                    "x": 690,
                    "y": 280,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B33X",
                    "type": "ASTEROID",
                    "x": 363,
                    "y": 666,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C34C",
                    "type": "ASTEROID",
                    "x": 57,
                    "y": 767,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-AA2D",
                    "type": "ASTEROID",
                    "x": 131,
                    "y": 284,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-ZE9D",
                    "type": "ASTEROID",
                    "x": -318,
                    "y": 7,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-D47Z",
                    "type": "ASTEROID",
                    "x": -717,
                    "y": -181,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E50B",
                    "type": "ASTEROID",
                    "x": -564,
                    "y": -469,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-EA6X",
                    "type": "ASTEROID",
                    "x": -238,
                    "y": 281,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-D54X",
                    "type": "ASTEROID",
                    "x": -131,
                    "y": -732,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E56C",
                    "type": "ASTEROID",
                    "x": -495,
                    "y": -560,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B67B",
                    "type": "ASTEROID",
                    "x": 506,
                    "y": -565,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A69C",
                    "type": "ASTEROID",
                    "x": 686,
                    "y": 371,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E72F",
                    "type": "ASTEROID",
                    "x": 789,
                    "y": -55,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F65X",
                    "type": "ASTEROID",
                    "x": 671,
                    "y": -242,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F35C",
                    "type": "ASTEROID",
                    "x": -120,
                    "y": 771,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F28C",
                    "type": "ASTEROID",
                    "x": 456,
                    "y": 615,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F30E",
                    "type": "ASTEROID",
                    "x": 641,
                    "y": 363,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-ZZ7F",
                    "type": "ASTEROID",
                    "x": -150,
                    "y": 347,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-Z43X",
                    "type": "ASTEROID",
                    "x": -777,
                    "y": 8,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-Z45E",
                    "type": "ASTEROID",
                    "x": -677,
                    "y": 315,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B48X",
                    "type": "ASTEROID",
                    "x": -571,
                    "y": -495,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B13B",
                    "type": "ASTEROID",
                    "x": -305,
                    "y": -192,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F15X",
                    "type": "ASTEROID",
                    "x": 130,
                    "y": -282,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X55F",
                    "type": "ASTEROID",
                    "x": -586,
                    "y": -510,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A58Z",
                    "type": "ASTEROID",
                    "x": -346,
                    "y": -668,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F61F",
                    "type": "ASTEROID",
                    "x": 10,
                    "y": -763,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-D62X",
                    "type": "ASTEROID",
                    "x": 94,
                    "y": -752,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B20Z",
                    "type": "ASTEROID",
                    "x": 241,
                    "y": -199,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E64E",
                    "type": "ASTEROID",
                    "x": 615,
                    "y": -475,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C37F",
                    "type": "ASTEROID",
                    "x": -265,
                    "y": 729,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A39C",
                    "type": "ASTEROID",
                    "x": -153,
                    "y": 725,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C31B",
                    "type": "ASTEROID",
                    "x": 658,
                    "y": 359,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E41C",
                    "type": "ASTEROID",
                    "x": -513,
                    "y": 504,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-CF3A",
                    "type": "ASTEROID",
                    "x": 207,
                    "y": 322,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C46F",
                    "type": "ASTEROID",
                    "x": -753,
                    "y": -84,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-FB5X",
                    "type": "ASTEROID",
                    "x": 112,
                    "y": 371,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X51E",
                    "type": "ASTEROID",
                    "x": -647,
                    "y": -318,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B52E",
                    "type": "ASTEROID",
                    "x": -425,
                    "y": -570,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X16C",
                    "type": "ASTEROID",
                    "x": 8,
                    "y": -315,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A57Z",
                    "type": "ASTEROID",
                    "x": -345,
                    "y": -672,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E68X",
                    "type": "ASTEROID",
                    "x": 740,
                    "y": -150,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F71E",
                    "type": "ASTEROID",
                    "x": 723,
                    "y": -294,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X73D",
                    "type": "ASTEROID",
                    "x": 693,
                    "y": -328,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A24X",
                    "type": "ASTEROID",
                    "x": 274,
                    "y": 175,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B25X",
                    "type": "ASTEROID",
                    "x": 183,
                    "y": 333,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-B38X",
                    "type": "ASTEROID",
                    "x": 4,
                    "y": 738,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-Z40Z",
                    "type": "ASTEROID",
                    "x": -181,
                    "y": 715,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F32B",
                    "type": "ASTEROID",
                    "x": -36,
                    "y": 729,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C42B",
                    "type": "ASTEROID",
                    "x": -341,
                    "y": 638,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A44C",
                    "type": "ASTEROID",
                    "x": -725,
                    "y": 85,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-F10E",
                    "type": "ASTEROID",
                    "x": -310,
                    "y": -13,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-C12F",
                    "type": "ASTEROID",
                    "x": -302,
                    "y": -134,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E14E",
                    "type": "ASTEROID",
                    "x": -210,
                    "y": -325,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-X17B",
                    "type": "ASTEROID",
                    "x": 147,
                    "y": -289,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-Z60F",
                    "type": "ASTEROID",
                    "x": 185,
                    "y": -734,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E19E",
                    "type": "ASTEROID",
                    "x": 323,
                    "y": -11,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-A63D",
                    "type": "ASTEROID",
                    "x": 212,
                    "y": -694,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E23E",
                    "type": "ASTEROID",
                    "x": 304,
                    "y": 72,
                    "orbitals": []
                },
                {
                    "symbol": "X1-QG15-E26E",
                    "type": "JUMP_GATE",
                    "x": -362,
                    "y": 267,
                    "orbitals": []
                }
            ],
            "factions": []
        },
        {
            "symbol": "X1-HC62",
            "sectorSymbol": "X1",
            "type": "YOUNG_STAR",
            "x": 273,
            "y": -181,
            "waypoints": [
                {
                    "symbol": "X1-HC62-BZ5C",
                    "type": "ASTEROID",
                    "x": 382,
                    "y": 605,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-DC6X",
                    "type": "ASTEROID",
                    "x": 277,
                    "y": 724,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-D14B",
                    "type": "ASTEROID",
                    "x": 377,
                    "y": 685,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-C13B",
                    "type": "ASTEROID",
                    "x": 705,
                    "y": -313,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-CF2B",
                    "type": "MOON",
                    "x": 7,
                    "y": -17,
                    "orbitals": [],
                    "orbits": "X1-HC62-EF1B"
                },
                {
                    "symbol": "X1-HC62-EC3A",
                    "type": "GAS_GIANT",
                    "x": 34,
                    "y": 29,
                    "orbitals": [
                        {
                            "symbol": "X1-HC62-DX4B"
                        }
                    ]
                },
                {
                    "symbol": "X1-HC62-Z15Z",
                    "type": "ASTEROID",
                    "x": 683,
                    "y": 271,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-XD7F",
                    "type": "ASTEROID",
                    "x": -436,
                    "y": 633,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-X11X",
                    "type": "ASTEROID",
                    "x": 412,
                    "y": -650,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-DX4B",
                    "type": "MOON",
                    "x": 34,
                    "y": 29,
                    "orbitals": [],
                    "orbits": "X1-HC62-EC3A"
                },
                {
                    "symbol": "X1-HC62-XX8F",
                    "type": "ASTEROID",
                    "x": -715,
                    "y": 29,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-X10X",
                    "type": "ASTEROID",
                    "x": 184,
                    "y": -735,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-X16C",
                    "type": "ASTEROID",
                    "x": 539,
                    "y": 468,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-EF1B",
                    "type": "PLANET",
                    "x": 7,
                    "y": -17,
                    "orbitals": [
                        {
                            "symbol": "X1-HC62-CF2B"
                        }
                    ]
                },
                {
                    "symbol": "X1-HC62-ZB9B",
                    "type": "ASTEROID",
                    "x": -355,
                    "y": -666,
                    "orbitals": []
                },
                {
                    "symbol": "X1-HC62-B12Z",
                    "type": "ASTEROID",
                    "x": 735,
                    "y": -29,
                    "orbitals": []
                }
            ],
            "factions": []
        }
    ],
    "meta": {
        "total": 8498,
        "page": 4,
        "limit": 20
    }
}

export const mockEmailData = {
    "data": {
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQUFBQUFBMTAxMCIsInZlcnNpb24iOiJ2Mi4xLjUiLCJyZXNldF9kYXRlIjoiMjAyNC0wMS0yOCIsImlhdCI6MTcwNjYxMDMyNywic3ViIjoiYWdlbnQtdG9rZW4ifQ.VxCQ0jPW1SPJP2rUxiQRMbwX9MMycd-uzA52POgyjSd0KhIIUTH6RazoYKsk57GPqn4kh6_WddIG5TTyVV0qBgOmHXXdEFYgBT6pxQF23vBULOT7CYMXzoaEzHnDV9DREC_YDt6ryp40Q4_WZtETK6iqiEHMGKtRLXFN3V7Z6lsXsEmGTNOzoBfsvxovI1tOAreEDna1oLARz0cGTXRtojtxOh3svk4U6VnfFjtKBMAaNqKPOLEG2ghNTabTsF3NyrziFanCTpzeHx4b_RIzWm9bWMhCDiO6V7DLiO_R3DQpLCF1AaSjURCVY22eW92MCTHGlbSZSMPR30wwnuY54A",
        "agent": {
            "accountId": "cls07q48h3t8ts60chy894c5f",
            "symbol": "AAAAAA1010",
            "headquarters": "X1-HN36-A1",
            "credits": 250000,
            "startingFaction": "COSMIC",
            "shipCount": 0
        },
        "contract": {
            "id": "cls07q4a33t8vs60c4rkql14r",
            "factionSymbol": "COSMIC",
            "type": "PROCUREMENT",
            "terms": {
                "deadline": "2024-02-06T10:25:27.321Z",
                "payment": {
                    "onAccepted": 1225,
                    "onFulfilled": 8686
                },
                "deliver": [
                    {
                        "tradeSymbol": "IRON_ORE",
                        "destinationSymbol": "X1-HN36-H58",
                        "unitsRequired": 48,
                        "unitsFulfilled": 0
                    }
                ]
            },
            "accepted": false,
            "fulfilled": false,
            "expiration": "2024-01-31T10:25:27.321Z",
            "deadlineToAccept": "2024-01-31T10:25:27.321Z"
        },
        "faction": {
            "symbol": "COSMIC",
            "name": "Cosmic Engineers",
            "description": "The Cosmic Engineers are a group of highly advanced scientists and engineers who seek to terraform and colonize new worlds, pushing the boundaries of technology and exploration.",
            "headquarters": "X1-DM68",
            "traits": [
                {
                    "symbol": "INNOVATIVE",
                    "name": "Innovative",
                    "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
                },
                {
                    "symbol": "BOLD",
                    "name": "Bold",
                    "description": "Unafraid to take risks and challenge the status quo. Sometimes willing to do things that others would not dare, and may be able to overcome obstacles and challenges that would be insurmountable for others. Sometimes able to inspire and motivate others to take bold action as well."
                },
                {
                    "symbol": "VISIONARY",
                    "name": "Visionary",
                    "description": "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality."
                },
                {
                    "symbol": "CURIOUS",
                    "name": "Curious",
                    "description": "Possessing a strong desire to learn and explore. Sometimes interested in a wide range of topics and may be willing to take risks in order to satisfy their curiosity. Sometimes able to think outside the box and come up with creative solutions to challenges."
                }
            ],
            "isRecruiting": true
        },
        "ship": {
            "symbol": "AAAAAA1010-1",
            "nav": {
                "systemSymbol": "X1-HN36",
                "waypointSymbol": "X1-HN36-A1",
                "route": {
                    "departure": {
                        "symbol": "X1-HN36-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-HN36",
                        "x": 3,
                        "y": -25
                    },
                    "origin": {
                        "symbol": "X1-HN36-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-HN36",
                        "x": 3,
                        "y": -25
                    },
                    "destination": {
                        "symbol": "X1-HN36-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-HN36",
                        "x": 3,
                        "y": -25
                    },
                    "arrival": "2024-01-30T10:25:27.392Z",
                    "departureTime": "2024-01-30T10:25:27.392Z"
                },
                "status": "DOCKED",
                "flightMode": "CRUISE"
            },
            "crew": {
                "current": 57,
                "capacity": 80,
                "required": 57,
                "rotation": "STRICT",
                "morale": 100,
                "wages": 0
            },
            "fuel": {
                "current": 400,
                "capacity": 400,
                "consumed": {
                    "amount": 0,
                    "timestamp": "2024-01-30T10:25:27.392Z"
                }
            },
            "cooldown": {
                "shipSymbol": "AAAAAA1010-1",
                "totalSeconds": 0,
                "remainingSeconds": 0
            },
            "frame": {
                "symbol": "FRAME_FRIGATE",
                "name": "Frigate",
                "description": "A medium-sized, multi-purpose spacecraft, often used for combat, transport, or support operations.",
                "moduleSlots": 8,
                "mountingPoints": 5,
                "fuelCapacity": 400,
                "condition": 100,
                "requirements": {
                    "power": 8,
                    "crew": 25
                }
            },
            "reactor": {
                "symbol": "REACTOR_FISSION_I",
                "name": "Fission Reactor I",
                "description": "A basic fission power reactor, used to generate electricity from nuclear fission reactions.",
                "condition": 100,
                "powerOutput": 31,
                "requirements": {
                    "crew": 8
                }
            },
            "engine": {
                "symbol": "ENGINE_ION_DRIVE_II",
                "name": "Ion Drive II",
                "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance.",
                "condition": 100,
                "speed": 30,
                "requirements": {
                    "power": 6,
                    "crew": 8
                }
            },
            "modules": [
                {
                    "symbol": "MODULE_CARGO_HOLD_II",
                    "name": "Expanded Cargo Hold",
                    "description": "An expanded cargo hold module that provides more efficient storage space for a ship's cargo.",
                    "capacity": 40,
                    "requirements": {
                        "crew": 2,
                        "power": 2,
                        "slots": 2
                    }
                },
                {
                    "symbol": "MODULE_CREW_QUARTERS_I",
                    "name": "Crew Quarters",
                    "description": "A module that provides living space and amenities for the crew.",
                    "capacity": 40,
                    "requirements": {
                        "crew": 2,
                        "power": 1,
                        "slots": 1
                    }
                },
                {
                    "symbol": "MODULE_CREW_QUARTERS_I",
                    "name": "Crew Quarters",
                    "description": "A module that provides living space and amenities for the crew.",
                    "capacity": 40,
                    "requirements": {
                        "crew": 2,
                        "power": 1,
                        "slots": 1
                    }
                },
                {
                    "symbol": "MODULE_MINERAL_PROCESSOR_I",
                    "name": "Mineral Processor",
                    "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
                    "requirements": {
                        "crew": 0,
                        "power": 1,
                        "slots": 2
                    }
                },
                {
                    "symbol": "MODULE_GAS_PROCESSOR_I",
                    "name": "Gas Processor",
                    "description": "Filters and processes extracted gases into their component parts, filters out impurities, and containerizes them into raw storage units.",
                    "requirements": {
                        "crew": 0,
                        "power": 1,
                        "slots": 2
                    }
                }
            ],
            "mounts": [
                {
                    "symbol": "MOUNT_SENSOR_ARRAY_II",
                    "name": "Sensor Array II",
                    "description": "An advanced sensor array that improves a ship's ability to detect and track other objects in space with greater accuracy and range.",
                    "strength": 4,
                    "requirements": {
                        "crew": 2,
                        "power": 2
                    }
                },
                {
                    "symbol": "MOUNT_GAS_SIPHON_II",
                    "name": "Gas Siphon II",
                    "description": "An advanced gas siphon that can extract gas from gas giants and other gas-rich bodies more efficiently and at a higher rate.",
                    "strength": 20,
                    "requirements": {
                        "crew": 2,
                        "power": 2
                    }
                },
                {
                    "symbol": "MOUNT_MINING_LASER_II",
                    "name": "Mining Laser II",
                    "description": "An advanced mining laser that is more efficient and effective at extracting valuable minerals from asteroids and other space objects.",
                    "strength": 5,
                    "requirements": {
                        "crew": 2,
                        "power": 2
                    }
                },
                {
                    "symbol": "MOUNT_SURVEYOR_II",
                    "name": "Surveyor II",
                    "description": "An advanced survey probe that can be used to gather information about a mineral deposit with greater accuracy.",
                    "strength": 2,
                    "deposits": [
                        "QUARTZ_SAND",
                        "SILICON_CRYSTALS",
                        "PRECIOUS_STONES",
                        "ICE_WATER",
                        "AMMONIA_ICE",
                        "IRON_ORE",
                        "COPPER_ORE",
                        "SILVER_ORE",
                        "ALUMINUM_ORE",
                        "GOLD_ORE",
                        "PLATINUM_ORE",
                        "DIAMONDS",
                        "URANITE_ORE"
                    ],
                    "requirements": {
                        "crew": 4,
                        "power": 3
                    }
                }
            ],
            "registration": {
                "name": "AAAAAA1010-1",
                "factionSymbol": "COSMIC",
                "role": "COMMAND"
            },
            "cargo": {
                "capacity": 40,
                "units": 0,
                "inventory": []
            }
        }
    }
}
export const waypoints = {
    "data": [
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B9",
            "type": "ASTEROID",
            "x": -304,
            "y": -233,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                },
                {
                    "symbol": "SHALLOW_CRATERS",
                    "name": "Shallow Craters",
                    "description": "Numerous shallow craters, offering easier access to sub-surface resources but also creating an uneven terrain that can complicate land-based activities."
                },
                {
                    "symbol": "DEEP_CRATERS",
                    "name": "Deep Craters",
                    "description": "Marked by deep, expansive craters, potentially formed by ancient meteor impacts. These formations may offer hidden resources but also pose challenges for mobility and construction."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.556Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B15",
            "type": "ASTEROID",
            "x": 63,
            "y": -313,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "HOLLOWED_INTERIOR",
                    "name": "Hollowed Interior",
                    "description": "A location with large hollow spaces beneath its surface, providing unique opportunities for subterranean construction and resource extraction, but also posing risks of structural instability."
                },
                {
                    "symbol": "DEEP_CRATERS",
                    "name": "Deep Craters",
                    "description": "Marked by deep, expansive craters, potentially formed by ancient meteor impacts. These formations may offer hidden resources but also pose challenges for mobility and construction."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.558Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B10",
            "type": "ASTEROID",
            "x": -377,
            "y": -87,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "EXPLOSIVE_GASES",
                    "name": "Explosive Gases",
                    "description": "A volatile environment filled with highly reactive gases, posing a constant risk to those who venture too close and offering opportunities for harvesting valuable materials such as hydrocarbons."
                },
                {
                    "symbol": "SHALLOW_CRATERS",
                    "name": "Shallow Craters",
                    "description": "Numerous shallow craters, offering easier access to sub-surface resources but also creating an uneven terrain that can complicate land-based activities."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.559Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B16",
            "type": "ASTEROID",
            "x": 49,
            "y": -307,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                },
                {
                    "symbol": "SHALLOW_CRATERS",
                    "name": "Shallow Craters",
                    "description": "Numerous shallow craters, offering easier access to sub-surface resources but also creating an uneven terrain that can complicate land-based activities."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.559Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-A1",
            "type": "PLANET",
            "x": -19,
            "y": -13,
            "orbitals": [
                {
                    "symbol": "X1-HB61-A2"
                },
                {
                    "symbol": "X1-HB61-A3"
                },
                {
                    "symbol": "X1-HB61-A4"
                }
            ],
            "traits": [
                {
                    "symbol": "TEMPERATE",
                    "name": "Temperate",
                    "description": "A world with a mild climate and balanced ecosystem, providing a comfortable environment for a variety of life forms and supporting diverse industries."
                },
                {
                    "symbol": "SPRAWLING_CITIES",
                    "name": "Sprawling Cities",
                    "description": "Expansive urban centers that stretch across the landscape, boasting advanced infrastructure and diverse populations."
                },
                {
                    "symbol": "BREATHABLE_ATMOSPHERE",
                    "name": "Breathable Atmosphere",
                    "description": "A waypoint with a life-sustaining atmosphere, allowing for easy colonization and the flourishing of diverse ecosystems without the need for advanced life support systems."
                },
                {
                    "symbol": "DRY_SEABEDS",
                    "name": "Dry Seabeds",
                    "description": "Vast, desolate landscapes that once held oceans, now exposing the remnants of ancient marine life and providing opportunities for the discovery of valuable resources."
                },
                {
                    "symbol": "PERPETUAL_DAYLIGHT",
                    "name": "Perpetual Daylight",
                    "description": "A waypoint that never experiences darkness, providing abundant solar energy and unique living conditions for its inhabitants."
                },
                {
                    "symbol": "MARKETPLACE",
                    "name": "Marketplace",
                    "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.557Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B17",
            "type": "ASTEROID",
            "x": 79,
            "y": -350,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "EXPLOSIVE_GASES",
                    "name": "Explosive Gases",
                    "description": "A volatile environment filled with highly reactive gases, posing a constant risk to those who venture too close and offering opportunities for harvesting valuable materials such as hydrocarbons."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B11",
            "type": "ASTEROID",
            "x": -356,
            "y": -145,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                },
                {
                    "symbol": "MICRO_GRAVITY_ANOMALIES",
                    "name": "Micro-Gravity Anomalies",
                    "description": "Unpredictable gravity fields, making navigation and construction particularly challenging. These anomalies may also yield unique scientific research opportunities."
                },
                {
                    "symbol": "DEEP_CRATERS",
                    "name": "Deep Craters",
                    "description": "Marked by deep, expansive craters, potentially formed by ancient meteor impacts. These formations may offer hidden resources but also pose challenges for mobility and construction."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B19",
            "type": "ASTEROID",
            "x": 238,
            "y": -261,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                },
                {
                    "symbol": "UNSTABLE_COMPOSITION",
                    "name": "Unstable Composition",
                    "description": "A location with volatile geological composition, making it prone to frequent seismic activities and necessitating specialized construction techniques for long-term habitation or activity."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B18",
            "type": "ASTEROID",
            "x": -54,
            "y": -332,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-ZZ5B",
            "type": "ENGINEERED_ASTEROID",
            "x": 6,
            "y": -25,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "STRIPPED",
                    "name": "Stripped",
                    "description": "A location that has been over-mined or over-harvested, resulting in depleted resources and barren landscapes."
                },
                {
                    "symbol": "MARKETPLACE",
                    "name": "Marketplace",
                    "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B12",
            "type": "ASTEROID",
            "x": -151,
            "y": -286,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B20",
            "type": "ASTEROID",
            "x": 318,
            "y": -199,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "RARE_METAL_DEPOSITS",
                    "name": "Rare Metal Deposits",
                    "description": "A treasure trove of scarce metal ores such as uranite and meritium, highly sought after for their unique properties and uses."
                },
                {
                    "symbol": "RADIOACTIVE",
                    "name": "Radioactive",
                    "description": "A hazardous location with elevated levels of radiation, requiring specialized equipment and shielding for safe habitation and exploration."
                },
                {
                    "symbol": "HOLLOWED_INTERIOR",
                    "name": "Hollowed Interior",
                    "description": "A location with large hollow spaces beneath its surface, providing unique opportunities for subterranean construction and resource extraction, but also posing risks of structural instability."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B21",
            "type": "ASTEROID",
            "x": 310,
            "y": -129,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "DEEP_CRATERS",
                    "name": "Deep Craters",
                    "description": "Marked by deep, expansive craters, potentially formed by ancient meteor impacts. These formations may offer hidden resources but also pose challenges for mobility and construction."
                },
                {
                    "symbol": "HOLLOWED_INTERIOR",
                    "name": "Hollowed Interior",
                    "description": "A location with large hollow spaces beneath its surface, providing unique opportunities for subterranean construction and resource extraction, but also posing risks of structural instability."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B6",
            "type": "FUEL_STATION",
            "x": -188,
            "y": 15,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MARKETPLACE",
                    "name": "Marketplace",
                    "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.560Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B13",
            "type": "ASTEROID",
            "x": -123,
            "y": -306,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "RADIOACTIVE",
                    "name": "Radioactive",
                    "description": "A hazardous location with elevated levels of radiation, requiring specialized equipment and shielding for safe habitation and exploration."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B22",
            "type": "ASTEROID",
            "x": 301,
            "y": 124,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B14",
            "type": "ASTEROID",
            "x": -77,
            "y": -324,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "COMMON_METAL_DEPOSITS",
                    "name": "Common Metal Deposits",
                    "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
                },
                {
                    "symbol": "EXPLOSIVE_GASES",
                    "name": "Explosive Gases",
                    "description": "A volatile environment filled with highly reactive gases, posing a constant risk to those who venture too close and offering opportunities for harvesting valuable materials such as hydrocarbons."
                },
                {
                    "symbol": "DEEP_CRATERS",
                    "name": "Deep Craters",
                    "description": "Marked by deep, expansive craters, potentially formed by ancient meteor impacts. These formations may offer hidden resources but also pose challenges for mobility and construction."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B24",
            "type": "ASTEROID",
            "x": 377,
            "y": 72,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B23",
            "type": "ASTEROID",
            "x": 323,
            "y": 0,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                },
                {
                    "symbol": "EXPLOSIVE_GASES",
                    "name": "Explosive Gases",
                    "description": "A volatile environment filled with highly reactive gases, posing a constant risk to those who venture too close and offering opportunities for harvesting valuable materials such as hydrocarbons."
                },
                {
                    "symbol": "SHALLOW_CRATERS",
                    "name": "Shallow Craters",
                    "description": "Numerous shallow craters, offering easier access to sub-surface resources but also creating an uneven terrain that can complicate land-based activities."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.561Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-HB61",
            "symbol": "X1-HB61-B25",
            "type": "ASTEROID",
            "x": 144,
            "y": 305,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "MINERAL_DEPOSITS",
                    "name": "Mineral Deposits",
                    "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
                },
                {
                    "symbol": "DEEP_CRATERS",
                    "name": "Deep Craters",
                    "description": "Marked by deep, expansive craters, potentially formed by ancient meteor impacts. These formations may offer hidden resources but also pose challenges for mobility and construction."
                }
            ],
            "modifiers": [],
            "chart": {
                "submittedBy": "COSMIC",
                "submittedOn": "2024-01-28T17:24:33.562Z"
            },
            "faction": {
                "symbol": "COSMIC"
            },
            "isUnderConstruction": false
        }
    ],
    "meta": {
        "total": 94,
        "page": 1,
        "limit": 20
    }
}

export const navigateData = {
    "data": {
        "nav": {
            "systemSymbol": "X1-HB61",
            "waypointSymbol": "X1-HB61-B9",
            "route": {
                "departure": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "origin": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "destination": {
                    "symbol": "X1-HB61-B9",
                    "type": "ASTEROID",
                    "systemSymbol": "X1-HB61",
                    "x": -304,
                    "y": -233
                },
                "arrival": "2024-02-01T02:10:22.194Z",
                "departureTime": "2024-02-01T02:05:07.194Z"
            },
            "status": "IN_TRANSIT",
            "flightMode": "CRUISE"
        },
        "fuel": {
            "current": 40,
            "capacity": 400,
            "consumed": {
                "amount": 360,
                "timestamp": "2024-02-01T02:05:07.206Z"
            }
        }
    }
}

export const extraction = {
    "data": {
        "extraction": {
            "shipSymbol": "ALU2000-1",
            "yield": {
                "symbol": "IRON_ORE",
                "units": 7
            }
        },
        "cooldown": {
            "shipSymbol": "ALU2000-1",
            "totalSeconds": 80,
            "remainingSeconds": 79,
            "expiration": "2024-01-30T22:17:19.505Z"
        },
        "cargo": {
            "capacity": 40,
            "units": 7,
            "inventory": [
                {
                    "symbol": "IRON_ORE",
                    "name": "Iron Ore",
                    "description": "A common and valuable ore used in the production of steel and other alloys.",
                    "units": 7
                }
            ]
        }
    }
}

export const orbit = {
    "data": {
        "nav": {
            "systemSymbol": "X1-HB61",
            "waypointSymbol": "X1-HB61-A1",
            "route": {
                "departure": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "origin": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "destination": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "arrival": "2024-02-01T00:11:03.182Z",
                "departureTime": "2024-02-01T00:11:03.182Z"
            },
            "status": "IN_ORBIT",
            "flightMode": "CRUISE"
        }
    }
}

export const unavailableWaypoints = {
    "data": [
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-EF3Z",
            "type": "GAS_GIANT",
            "x": 45,
            "y": 3,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-CZ1A",
            "type": "PLANET",
            "x": 20,
            "y": 1,
            "orbitals": [
                {
                    "symbol": "X1-MM93-AA2E"
                }
            ],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-A11F",
            "type": "ASTEROID",
            "x": 690,
            "y": 239,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-EF6B",
            "type": "ASTEROID",
            "x": -576,
            "y": 427,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-C12B",
            "type": "ASTEROID",
            "x": 720,
            "y": 6,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-ZZ4A",
            "type": "GAS_GIANT",
            "x": 35,
            "y": 69,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-A13C",
            "type": "ASTEROID",
            "x": -162,
            "y": 739,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-FX8E",
            "type": "ASTEROID",
            "x": -562,
            "y": -484,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-DC5B",
            "type": "ASTEROID",
            "x": -14,
            "y": 726,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-XZ7Z",
            "type": "ASTEROID",
            "x": -749,
            "y": -224,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-XC9A",
            "type": "ASTEROID",
            "x": -191,
            "y": -742,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-X10F",
            "type": "ASTEROID",
            "x": 23,
            "y": -779,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "isUnderConstruction": false
        },
        {
            "systemSymbol": "X1-MM93",
            "symbol": "X1-MM93-AA2E",
            "type": "MOON",
            "x": 20,
            "y": 1,
            "orbitals": [],
            "traits": [
                {
                    "symbol": "UNCHARTED",
                    "name": "Uncharted",
                    "description": "An unexplored region of space, full of potential discoveries and hidden dangers."
                }
            ],
            "modifiers": [],
            "orbits": "X1-MM93-CZ1A",
            "isUnderConstruction": false
        }
    ],
    "meta": {
        "total": 13,
        "page": 1,
        "limit": 20
    }
}
export const navigateError = {
    "error": {
        "message": "Navigate request failed. Destination X1-MM93-EF3Z is outside the X1-ZV83 system.",
        "code": 4202,
        "data": {
            "shipSymbol": "ALU1000-1",
            "destinationSymbol": "X1-MM93-EF3Z",
            "currentSystemSymbol": "X1-ZV83"
        }
    }
}
export const market = {
    "data": {
        "symbol": "X1-HB61-A1",
        "imports": [
            {
                "symbol": "FOOD",
                "name": "Galactic Cuisine",
                "description": "A diverse range of foods from different planets, including fresh produce, meats, and prepared meals."
            },
            {
                "symbol": "MEDICINE",
                "name": "Medicine",
                "description": "Medical products, including drugs, treatments, and medical equipment."
            },
            {
                "symbol": "CLOTHING",
                "name": "Clothing",
                "description": "A wide range of clothing and fashion items, including garments, accessories, and textiles."
            },
            {
                "symbol": "EQUIPMENT",
                "name": "Equipment",
                "description": "Tools and equipment used in various industries and applications."
            },
            {
                "symbol": "LASER_RIFLES",
                "name": "Laser Rifles",
                "description": "Advanced weapons that use focused beams of light to deliver highly destructive energy to a target."
            },
            {
                "symbol": "JEWELRY",
                "name": "Jewelry",
                "description": "Exquisite and valuable pieces of jewelry made from rare materials and precious gems."
            }
        ],
        "exports": [],
        "exchange": [
            {
                "symbol": "FUEL",
                "name": "Fuel",
                "description": "High-energy fuel used in spacecraft propulsion systems to enable long-distance space travel."
            }
        ],
        "transactions": [
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T23:05:33.275Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "CLOTHING",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 5155,
                "totalPrice": 103100,
                "timestamp": "2024-01-31T23:05:32.719Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T23:01:44.620Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "EQUIPMENT",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 3486,
                "totalPrice": 69720,
                "timestamp": "2024-01-31T23:01:44.019Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 1,
                "pricePerUnit": 72,
                "totalPrice": 72,
                "timestamp": "2024-01-31T22:57:55.015Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "JEWELRY",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 3573,
                "totalPrice": 71460,
                "timestamp": "2024-01-31T22:57:54.447Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T22:34:05.351Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FOOD",
                "type": "SELL",
                "units": 40,
                "pricePerUnit": 2336,
                "totalPrice": 93440,
                "timestamp": "2024-01-31T22:34:04.473Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T22:28:49.800Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "CLOTHING",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 5192,
                "totalPrice": 103840,
                "timestamp": "2024-01-31T22:28:49.394Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 1,
                "pricePerUnit": 72,
                "totalPrice": 72,
                "timestamp": "2024-01-31T20:10:50.312Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "JEWELRY",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 3573,
                "totalPrice": 71460,
                "timestamp": "2024-01-31T20:10:49.691Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T20:08:48.973Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "EQUIPMENT",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 3489,
                "totalPrice": 69780,
                "timestamp": "2024-01-31T20:08:48.347Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T18:00:32.035Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FOOD",
                "type": "SELL",
                "units": 40,
                "pricePerUnit": 2339,
                "totalPrice": 93560,
                "timestamp": "2024-01-31T18:00:31.623Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 1,
                "pricePerUnit": 72,
                "totalPrice": 72,
                "timestamp": "2024-01-31T17:25:42.838Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "JEWELRY",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 3568,
                "totalPrice": 71360,
                "timestamp": "2024-01-31T17:25:41.940Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "FUEL",
                "type": "PURCHASE",
                "units": 2,
                "pricePerUnit": 72,
                "totalPrice": 144,
                "timestamp": "2024-01-31T17:23:41.729Z"
            },
            {
                "waypointSymbol": "X1-HB61-A1",
                "shipSymbol": "100L-TRADER2-1",
                "tradeSymbol": "CLOTHING",
                "type": "SELL",
                "units": 20,
                "pricePerUnit": 5192,
                "totalPrice": 103840,
                "timestamp": "2024-01-31T17:23:41.128Z"
            }
        ],
        "tradeGoods": [
            {
                "symbol": "FOOD",
                "tradeVolume": 60,
                "type": "IMPORT",
                "supply": "SCARCE",
                "activity": "WEAK",
                "purchasePrice": 4706,
                "sellPrice": 2335
            },
            {
                "symbol": "MEDICINE",
                "tradeVolume": 20,
                "type": "IMPORT",
                "supply": "SCARCE",
                "activity": "WEAK",
                "purchasePrice": 9610,
                "sellPrice": 4774
            },
            {
                "symbol": "CLOTHING",
                "tradeVolume": 20,
                "type": "IMPORT",
                "supply": "SCARCE",
                "activity": "WEAK",
                "purchasePrice": 10358,
                "sellPrice": 5128
            },
            {
                "symbol": "EQUIPMENT",
                "tradeVolume": 20,
                "type": "IMPORT",
                "supply": "SCARCE",
                "activity": "WEAK",
                "purchasePrice": 7010,
                "sellPrice": 3474
            },
            {
                "symbol": "LASER_RIFLES",
                "tradeVolume": 6,
                "type": "IMPORT",
                "supply": "SCARCE",
                "activity": "WEAK",
                "purchasePrice": 73466,
                "sellPrice": 36625
            },
            {
                "symbol": "FUEL",
                "tradeVolume": 180,
                "type": "EXCHANGE",
                "supply": "MODERATE",
                "purchasePrice": 72,
                "sellPrice": 68
            },
            {
                "symbol": "JEWELRY",
                "tradeVolume": 20,
                "type": "IMPORT",
                "supply": "LIMITED",
                "activity": "WEAK",
                "purchasePrice": 7278,
                "sellPrice": 3542
            }
        ]
    }
}
export const purchaseFood = {
    "data": {
        "agent": {
            "accountId": "cls2gnoys9xtcs60cmaizkic6",
            "symbol": "ALU2000",
            "headquarters": "X1-HB61-A1",
            "credits": 226470,
            "startingFaction": "COSMIC",
            "shipCount": 2
        },
        "cargo": {
            "capacity": 40,
            "units": 5,
            "inventory": [
                {
                    "symbol": "FOOD",
                    "name": "Galactic Cuisine",
                    "description": "A diverse range of foods from different planets, including fresh produce, meats, and prepared meals.",
                    "units": 5
                }
            ]
        },
        "transaction": {
            "waypointSymbol": "X1-HB61-A1",
            "shipSymbol": "ALU2000-1",
            "tradeSymbol": "FOOD",
            "type": "PURCHASE",
            "units": 5,
            "pricePerUnit": 4706,
            "totalPrice": 23530,
            "timestamp": "2024-02-01T00:47:31.907Z"
        }
    }
}
export const sellFood = {
    "data": {
        "agent": {
            "accountId": "cls2gnoys9xtcs60cmaizkic6",
            "symbol": "ALU2000",
            "headquarters": "X1-HB61-A1",
            "credits": 238155,
            "startingFaction": "COSMIC",
            "shipCount": 2
        },
        "cargo": {
            "capacity": 40,
            "units": 0,
            "inventory": []
        },
        "transaction": {
            "waypointSymbol": "X1-HB61-A1",
            "shipSymbol": "ALU2000-1",
            "tradeSymbol": "FOOD",
            "type": "SELL",
            "units": 5,
            "pricePerUnit": 2337,
            "totalPrice": 11685,
            "timestamp": "2024-02-01T01:09:05.610Z"
        }
    }
}
export const shipyard = {
    "data": {
        "symbol": "X1-HB61-H55",
        "shipTypes": [
            {
                "type": "SHIP_MINING_DRONE"
            },
            {
                "type": "SHIP_SURVEYOR"
            }
        ],
        "transactions": [
            {
                "shipSymbol": "SHIP_SURVEYOR",
                "shipType": "SHIP_SURVEYOR",
                "waypointSymbol": "X1-HB61-H55",
                "agentSymbol": "TOOK",
                "price": 28282,
                "timestamp": "2024-01-31T15:13:15.094Z"
            },
            {
                "shipSymbol": "SHIP_MINING_DRONE",
                "shipType": "SHIP_MINING_DRONE",
                "waypointSymbol": "X1-HB61-H55",
                "agentSymbol": "TOOK",
                "price": 36941,
                "timestamp": "2024-01-31T15:13:14.876Z"
            },
            {
                "shipSymbol": "SHIP_MINING_DRONE",
                "shipType": "SHIP_MINING_DRONE",
                "waypointSymbol": "X1-HB61-H55",
                "agentSymbol": "9AFA691A25E844",
                "price": 35999,
                "timestamp": "2024-01-30T20:49:07.103Z"
            }
        ],
        "ships": [
            {
                "type": "SHIP_MINING_DRONE",
                "name": "Mining Drone",
                "description": "A small, unmanned spacecraft that can be used for mining operations, such as extracting valuable minerals from asteroids.",
                "supply": "HIGH",
                "purchasePrice": 37987,
                "frame": {
                    "symbol": "FRAME_DRONE",
                    "name": "Drone",
                    "description": "A small, unmanned spacecraft used for various tasks, such as surveillance, transportation, or combat.",
                    "moduleSlots": 3,
                    "mountingPoints": 2,
                    "fuelCapacity": 80,
                    "requirements": {
                        "power": 1,
                        "crew": -4
                    }
                },
                "reactor": {
                    "symbol": "REACTOR_CHEMICAL_I",
                    "name": "Chemical Reactor I",
                    "description": "A basic chemical power reactor, used to generate electricity from chemical reactions.",
                    "powerOutput": 15,
                    "requirements": {
                        "crew": 3
                    }
                },
                "engine": {
                    "symbol": "ENGINE_IMPULSE_DRIVE_I",
                    "name": "Impulse Drive I",
                    "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
                    "speed": 3,
                    "requirements": {
                        "power": 1,
                        "crew": 0
                    }
                },
                "modules": [
                    {
                        "symbol": "MODULE_CARGO_HOLD_I",
                        "name": "Cargo Hold",
                        "description": "A module that increases a ship's cargo capacity.",
                        "capacity": 15,
                        "requirements": {
                            "crew": 0,
                            "power": 1,
                            "slots": 1
                        }
                    },
                    {
                        "symbol": "MODULE_MINERAL_PROCESSOR_I",
                        "name": "Mineral Processor",
                        "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
                        "requirements": {
                            "crew": 0,
                            "power": 1,
                            "slots": 2
                        }
                    }
                ],
                "mounts": [
                    {
                        "symbol": "MOUNT_MINING_LASER_I",
                        "name": "Mining Laser I",
                        "description": "A basic mining laser that can be used to extract valuable minerals from asteroids and other space objects.",
                        "strength": 3,
                        "requirements": {
                            "crew": 1,
                            "power": 1
                        }
                    }
                ],
                "crew": {
                    "required": 0,
                    "capacity": 0
                }
            },
            {
                "type": "SHIP_SURVEYOR",
                "name": "Surveyor Craft",
                "description": "A specialized spacecraft equipped with surveying mounts, designed for detailed surveying of celestial bodies, resource identification, and scientific research.",
                "supply": "HIGH",
                "purchasePrice": 29146,
                "frame": {
                    "symbol": "FRAME_DRONE",
                    "name": "Drone",
                    "description": "A small, unmanned spacecraft used for various tasks, such as surveillance, transportation, or combat.",
                    "moduleSlots": 3,
                    "mountingPoints": 2,
                    "fuelCapacity": 80,
                    "requirements": {
                        "power": 1,
                        "crew": -4
                    }
                },
                "reactor": {
                    "symbol": "REACTOR_CHEMICAL_I",
                    "name": "Chemical Reactor I",
                    "description": "A basic chemical power reactor, used to generate electricity from chemical reactions.",
                    "powerOutput": 15,
                    "requirements": {
                        "crew": 3
                    }
                },
                "engine": {
                    "symbol": "ENGINE_IMPULSE_DRIVE_I",
                    "name": "Impulse Drive I",
                    "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
                    "speed": 3,
                    "requirements": {
                        "power": 1,
                        "crew": 0
                    }
                },
                "modules": [],
                "mounts": [
                    {
                        "symbol": "MOUNT_SURVEYOR_I",
                        "name": "Surveyor I",
                        "description": "A basic survey probe that can be used to gather information about a mineral deposit.",
                        "strength": 1,
                        "deposits": [
                            "QUARTZ_SAND",
                            "SILICON_CRYSTALS",
                            "PRECIOUS_STONES",
                            "ICE_WATER",
                            "AMMONIA_ICE",
                            "IRON_ORE",
                            "COPPER_ORE",
                            "SILVER_ORE",
                            "ALUMINUM_ORE",
                            "GOLD_ORE",
                            "PLATINUM_ORE"
                        ],
                        "requirements": {
                            "crew": 1,
                            "power": 1
                        }
                    }
                ],
                "crew": {
                    "required": 0,
                    "capacity": 0
                }
            }
        ],
        "modificationsFee": 100
    }
}

export const shipDataAfterPurchase = {
    "data": {
        "agent": {
            "accountId": "cls2gnoys9xtcs60cmaizkic6",
            "symbol": "ALU2000",
            "headquarters": "X1-HB61-A1",
            "credits": 200168,
            "startingFaction": "COSMIC",
            "shipCount": 3
        },
        "ship": {
            "symbol": "ALU2000-3",
            "nav": {
                "systemSymbol": "X1-HB61",
                "waypointSymbol": "X1-HB61-H55",
                "route": {
                    "departure": {
                        "symbol": "X1-HB61-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-HB61",
                        "x": 24,
                        "y": -40
                    },
                    "origin": {
                        "symbol": "X1-HB61-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-HB61",
                        "x": 24,
                        "y": -40
                    },
                    "destination": {
                        "symbol": "X1-HB61-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-HB61",
                        "x": 24,
                        "y": -40
                    },
                    "arrival": "2024-02-01T01:17:34.760Z",
                    "departureTime": "2024-02-01T01:17:34.760Z"
                },
                "status": "DOCKED",
                "flightMode": "CRUISE"
            },
            "crew": {
                "current": 0,
                "capacity": 0,
                "required": 0,
                "rotation": "STRICT",
                "morale": 100,
                "wages": 0
            },
            "fuel": {
                "current": 80,
                "capacity": 80,
                "consumed": {
                    "amount": 0,
                    "timestamp": "2024-02-01T01:17:34.760Z"
                }
            },
            "cooldown": {
                "shipSymbol": "ALU2000-3",
                "totalSeconds": 0,
                "remainingSeconds": 0
            },
            "frame": {
                "symbol": "FRAME_DRONE",
                "name": "Drone",
                "description": "A small, unmanned spacecraft used for various tasks, such as surveillance, transportation, or combat.",
                "moduleSlots": 3,
                "mountingPoints": 2,
                "fuelCapacity": 80,
                "condition": 100,
                "requirements": {
                    "power": 1,
                    "crew": -4
                }
            },
            "reactor": {
                "symbol": "REACTOR_CHEMICAL_I",
                "name": "Chemical Reactor I",
                "description": "A basic chemical power reactor, used to generate electricity from chemical reactions.",
                "condition": 100,
                "powerOutput": 15,
                "requirements": {
                    "crew": 3
                }
            },
            "engine": {
                "symbol": "ENGINE_IMPULSE_DRIVE_I",
                "name": "Impulse Drive I",
                "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
                "condition": 100,
                "speed": 3,
                "requirements": {
                    "power": 1,
                    "crew": 0
                }
            },
            "modules": [
                {
                    "symbol": "MODULE_CARGO_HOLD_I",
                    "name": "Cargo Hold",
                    "description": "A module that increases a ship's cargo capacity.",
                    "capacity": 15,
                    "requirements": {
                        "crew": 0,
                        "power": 1,
                        "slots": 1
                    }
                },
                {
                    "symbol": "MODULE_MINERAL_PROCESSOR_I",
                    "name": "Mineral Processor",
                    "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
                    "requirements": {
                        "crew": 0,
                        "power": 1,
                        "slots": 2
                    }
                }
            ],
            "mounts": [
                {
                    "symbol": "MOUNT_MINING_LASER_I",
                    "name": "Mining Laser I",
                    "description": "A basic mining laser that can be used to extract valuable minerals from asteroids and other space objects.",
                    "strength": 3,
                    "requirements": {
                        "crew": 1,
                        "power": 1
                    }
                }
            ],
            "registration": {
                "name": "ALU2000-3",
                "factionSymbol": "COSMIC",
                "role": "EXCAVATOR"
            },
            "cargo": {
                "capacity": 15,
                "units": 0,
                "inventory": []
            }
        },
        "transaction": {
            "shipSymbol": "SHIP_MINING_DRONE",
            "shipType": "SHIP_MINING_DRONE",
            "waypointSymbol": "X1-HB61-H55",
            "agentSymbol": "ALU2000",
            "price": 37987,
            "timestamp": "2024-02-01T01:17:34.830Z"
        }
    }
}
export const contract = {
    "data": [
        {
            "id": "cls57wrj0jtr4s60chr67gbn9",
            "factionSymbol": "COSMIC",
            "type": "PROCUREMENT",
            "terms": {
                "deadline": "2024-02-09T22:29:28.263Z",
                "payment": {
                    "onAccepted": 2043,
                    "onFulfilled": 9536
                },
                "deliver": [
                    {
                        "tradeSymbol": "ALUMINUM_ORE",
                        "destinationSymbol": "X1-HN36-H58",
                        "unitsRequired": 49,
                        "unitsFulfilled": 0
                    }
                ]
            },
            "accepted": false,
            "fulfilled": false,
            "expiration": "2030-02-03T22:29:28.263Z",
            "deadlineToAccept": "2030-02-03T22:29:28.263Z"
        }
    ],
    "meta": {
        "total": 1,
        "page": 1,
        "limit": 20
    }
}
export const AcceptedContractList = {
    "data": [
        {
            "id": "cls57wrj0jtr4s60chr67gbn9",
            "factionSymbol": "COSMIC",
            "type": "PROCUREMENT",
            "terms": {
                "deadline": "2024-02-09T22:29:28.263Z",
                "payment": {
                    "onAccepted": 2043,
                    "onFulfilled": 9536
                },
                "deliver": [
                    {
                        "tradeSymbol": "ALUMINUM_ORE",
                        "destinationSymbol": "X1-HN36-H58",
                        "unitsRequired": 49,
                        "unitsFulfilled": 0
                    }
                ]
            },
            "accepted": true,
            "fulfilled": false,
            "expiration": "2030-02-03T22:29:28.263Z",
            "deadlineToAccept": "2030-02-03T22:29:28.263Z"
        }
    ],
    "meta": {
        "total": 1,
        "page": 1,
        "limit": 20
    }
}
export const acceptedContract = {
    "data": {
        "contract": {
            "id": "cls57wrj0jtr4s60chr67gbn9",
            "factionSymbol": "COSMIC",
            "type": "PROCUREMENT",
            "terms": {
                "deadline": "2024-02-09T22:29:28.263Z",
                "payment": {
                    "onAccepted": 2043,
                    "onFulfilled": 30000
                },
                "deliver": [
                    {
                        "tradeSymbol": "ALUMINUM_ORE",
                        "destinationSymbol": "X1-HN36-H58",
                        "unitsRequired": 49,
                        "unitsFulfilled": 0
                    }
                ]
            },
            "accepted": true,
            "fulfilled": false,
            "expiration": "2024-02-03T22:29:28.263Z",
            "deadlineToAccept": "2024-02-03T22:29:28.263Z"
        },
        "agent": {
            "accountId": "cls57wrgmjtqys60c7zcc0to2",
            "symbol": "ALU3000",
            "headquarters": "X1-HN36-A1",
            "credits": 252043,
            "startingFaction": "COSMIC",
            "shipCount": 2
        }
    }
}
export const deliveredContract = {
    "data": {
        "contract": {
            "id": "cls57wrj0jtr4s60chr67gbn9",
            "factionSymbol": "COSMIC",
            "type": "PROCUREMENT",
            "terms": {
                "deadline": "2024-02-09T22:29:28.263Z",
                "payment": {
                    "onAccepted": 2043,
                    "onFulfilled": 30000
                },
                "deliver": [
                    {
                        "tradeSymbol": "ALUMINUM_ORE",
                        "destinationSymbol": "X1-HN36-H58",
                        "unitsRequired": 49,
                        "unitsFulfilled": 49
                    }
                ]
            },
            "accepted": true,
            "fulfilled": false,
            "expiration": "2024-02-03T22:29:28.263Z",
            "deadlineToAccept": "2024-02-03T22:29:28.263Z"
        },
        "cargo": {
            "capacity": 100,
            "units": 0,
            "inventory": []
        }
    }
}
export const registerNameTaken = {
    "error": {
        "message": "Cannot register agent. Agent symbol ALU4000 has already been claimed.",
        "code": 4111,
        "data": {
            "agentSymbol": "ALU4000"
        }
    }
}
export const cargoLimitExceeded = {
    "error": {
        "message": "Failed to update ship cargo. Cannot add 60 unit(s) to ship cargo. Exceeds max limit of 40.",
        "code": 4217,
        "data": {
            "shipSymbol": "ALU4000-1",
            "cargoCapacity": 40,
            "cargoUnits": 0,
            "unitsToAdd": 60
        }
    }
}
export const contractPickedShip = {
    "data": {
        "symbol": "ALU2000-1",
        "nav": {
            "systemSymbol": "X1-HB61",
            "waypointSymbol": "X1-HB61-A1",
            "route": {
                "departure": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "origin": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "destination": {
                    "symbol": "X1-HB61-A1",
                    "type": "PLANET",
                    "systemSymbol": "X1-HB61",
                    "x": -19,
                    "y": -13
                },
                "arrival": "2024-02-01T00:11:03.182Z",
                "departureTime": "2024-02-01T00:11:03.182Z"
            },
            "status": "DOCKED",
            "flightMode": "CRUISE"
        },
        "crew": {
            "current": 57,
            "capacity": 80,
            "required": 57,
            "rotation": "STRICT",
            "morale": 100,
            "wages": 0
        },
        "fuel": {
            "current": 400,
            "capacity": 400,
            "consumed": {
                "amount": 0,
                "timestamp": "2024-02-01T00:11:03.182Z"
            }
        },
        "cooldown": {
            "shipSymbol": "ALU2000-1",
            "totalSeconds": 0,
            "remainingSeconds": 0
        },
        "frame": {
            "symbol": "FRAME_FRIGATE",
            "name": "Frigate",
            "description": "A medium-sized, multi-purpose spacecraft, often used for combat, transport, or support operations.",
            "moduleSlots": 8,
            "mountingPoints": 5,
            "fuelCapacity": 400,
            "condition": 100,
            "requirements": {
                "power": 8,
                "crew": 25
            }
        },
        "reactor": {
            "symbol": "REACTOR_FISSION_I",
            "name": "Fission Reactor I",
            "description": "A basic fission power reactor, used to generate electricity from nuclear fission reactions.",
            "condition": 100,
            "powerOutput": 31,
            "requirements": {
                "crew": 8
            }
        },
        "engine": {
            "symbol": "ENGINE_ION_DRIVE_II",
            "name": "Ion Drive II",
            "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance.",
            "condition": 100,
            "speed": 30,
            "requirements": {
                "power": 6,
                "crew": 8
            }
        },
        "modules": [
            {
                "symbol": "MODULE_CARGO_HOLD_II",
                "name": "Expanded Cargo Hold",
                "description": "An expanded cargo hold module that provides more efficient storage space for a ship's cargo.",
                "capacity": 40,
                "requirements": {
                    "crew": 2,
                    "power": 2,
                    "slots": 2
                }
            },
            {
                "symbol": "MODULE_CREW_QUARTERS_I",
                "name": "Crew Quarters",
                "description": "A module that provides living space and amenities for the crew.",
                "capacity": 40,
                "requirements": {
                    "crew": 2,
                    "power": 1,
                    "slots": 1
                }
            },
            {
                "symbol": "MODULE_CREW_QUARTERS_I",
                "name": "Crew Quarters",
                "description": "A module that provides living space and amenities for the crew.",
                "capacity": 40,
                "requirements": {
                    "crew": 2,
                    "power": 1,
                    "slots": 1
                }
            },
            {
                "symbol": "MODULE_MINERAL_PROCESSOR_I",
                "name": "Mineral Processor",
                "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
                "requirements": {
                    "crew": 0,
                    "power": 1,
                    "slots": 2
                }
            },
            {
                "symbol": "MODULE_GAS_PROCESSOR_I",
                "name": "Gas Processor",
                "description": "Filters and processes extracted gases into their component parts, filters out impurities, and containerizes them into raw storage units.",
                "requirements": {
                    "crew": 0,
                    "power": 1,
                    "slots": 2
                }
            }
        ],
        "mounts": [
            {
                "symbol": "MOUNT_SENSOR_ARRAY_II",
                "name": "Sensor Array II",
                "description": "An advanced sensor array that improves a ship's ability to detect and track other objects in space with greater accuracy and range.",
                "strength": 4,
                "requirements": {
                    "crew": 2,
                    "power": 2
                }
            },
            {
                "symbol": "MOUNT_GAS_SIPHON_II",
                "name": "Gas Siphon II",
                "description": "An advanced gas siphon that can extract gas from gas giants and other gas-rich bodies more efficiently and at a higher rate.",
                "strength": 20,
                "requirements": {
                    "crew": 2,
                    "power": 2
                }
            },
            {
                "symbol": "MOUNT_MINING_LASER_II",
                "name": "Mining Laser II",
                "description": "An advanced mining laser that is more efficient and effective at extracting valuable minerals from asteroids and other space objects.",
                "strength": 5,
                "requirements": {
                    "crew": 2,
                    "power": 2
                }
            },
            {
                "symbol": "MOUNT_SURVEYOR_II",
                "name": "Surveyor II",
                "description": "An advanced survey probe that can be used to gather information about a mineral deposit with greater accuracy.",
                "strength": 2,
                "deposits": [
                    "QUARTZ_SAND",
                    "SILICON_CRYSTALS",
                    "PRECIOUS_STONES",
                    "ICE_WATER",
                    "AMMONIA_ICE",
                    "IRON_ORE",
                    "COPPER_ORE",
                    "SILVER_ORE",
                    "ALUMINUM_ORE",
                    "GOLD_ORE",
                    "PLATINUM_ORE",
                    "DIAMONDS",
                    "URANITE_ORE"
                ],
                "requirements": {
                    "crew": 4,
                    "power": 3
                }
            }
        ],
        "registration": {
            "name": "ALU2000-1",
            "factionSymbol": "COSMIC",
            "role": "COMMAND"
        },
        "cargo": {
            "capacity": 100,
            "units": 49,
            "inventory": [
                {
                    "symbol": "ALUMINUM_ORE",
                    "name": "Aluminum Ore",
                    "description": "Valuable type of ore",
                    "units": 49
                }
            ]
        }
    }
}

export const insufficientCreditsPurchase = {
    "error": {
        "message": "Market purchase failed. Agent does not have sufficient credits to purchase 1 unit(s) of FOOD",
        "code": 4600,
        "data": {
            "agentCredits": 830,
            "totalPrice": 4874,
            "tradeSymbol": "FOOD",
            "units": 1,
            "purchasePrice": 4874
        }
    }
}
