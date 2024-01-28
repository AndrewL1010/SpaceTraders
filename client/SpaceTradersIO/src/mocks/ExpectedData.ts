
export const expectedShipData = {
    "data": [
        {
            "symbol": "ALU1029-1",
            "nav": {
                "systemSymbol": "X1-YP52",
                "waypointSymbol": "X1-YP52-A1",
                "route": {
                    "departure": {
                        "symbol": "X1-YP52-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-YP52",
                        "x": 4,
                        "y": 24
                    },
                    "origin": {
                        "symbol": "X1-YP52-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-YP52",
                        "x": 4,
                        "y": 24
                    },
                    "destination": {
                        "symbol": "X1-YP52-A1",
                        "type": "PLANET",
                        "systemSymbol": "X1-YP52",
                        "x": 4,
                        "y": 24
                    },
                    "arrival": "2024-01-26T22:25:00.308Z",
                    "departureTime": "2024-01-26T22:25:00.308Z"
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
                    "timestamp": "2024-01-26T22:25:00.308Z"
                }
            },
            "cooldown": {
                "shipSymbol": "ALU1029-1",
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
                "name": "ALU1029-1",
                "factionSymbol": "COSMIC",
                "role": "COMMAND"
            },
            "cargo": {
                "capacity": 40,
                "units": 0,
                "inventory": []
            }
        },
        {
            "symbol": "ALU1029-2",
            "nav": {
                "systemSymbol": "X1-YP52",
                "waypointSymbol": "X1-YP52-H55",
                "route": {
                    "departure": {
                        "symbol": "X1-YP52-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-YP52",
                        "x": -46,
                        "y": 2
                    },
                    "origin": {
                        "symbol": "X1-YP52-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-YP52",
                        "x": -46,
                        "y": 2
                    },
                    "destination": {
                        "symbol": "X1-YP52-H55",
                        "type": "MOON",
                        "systemSymbol": "X1-YP52",
                        "x": -46,
                        "y": 2
                    },
                    "arrival": "2024-01-26T22:25:00.372Z",
                    "departureTime": "2024-01-26T22:25:00.372Z"
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
                    "timestamp": "2024-01-26T22:25:00.372Z"
                }
            },
            "cooldown": {
                "shipSymbol": "ALU1029-2",
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
                "name": "ALU1029-2",
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
        "systemSymbol": "X1-YP52",
        "symbol": "X1-YP52-A1",
        "type": "PLANET",
        "x": 4,
        "y": 24,
        "orbitals": [
            {
                "symbol": "X1-YP52-A3"
            },
            {
                "symbol": "X1-YP52-A2"
            },
            {
                "symbol": "X1-YP52-A4"
            }
        ],
        "traits": [
            {
                "symbol": "ROCKY",
                "name": "Rocky",
                "description": "A world with a rugged, rocky landscape, rich in minerals and other resources, providing a variety of opportunities for mining, research, and exploration."
            },
            {
                "symbol": "SCATTERED_SETTLEMENTS",
                "name": "Scattered Settlements",
                "description": "A collection of dispersed communities, each independent yet connected through trade and communication networks."
            },
            {
                "symbol": "VIBRANT_AURORAS",
                "name": "Vibrant Auroras",
                "description": "A celestial light show caused by the interaction of charged particles with the waypoint's atmosphere, creating a mesmerizing spectacle and attracting tourists from across the galaxy."
            },
            {
                "symbol": "EXPLOSIVE_GASES",
                "name": "Explosive Gases",
                "description": "A volatile environment filled with highly reactive gases, posing a constant risk to those who venture too close and offering opportunities for harvesting valuable materials such as hydrocarbons."
            },
            {
                "symbol": "MAGMA_SEAS",
                "name": "Magma Seas",
                "description": "A waypoint dominated by molten rock and intense heat, creating inhospitable conditions and requiring specialized technology to navigate and harvest resources."
            },
            {
                "symbol": "FOSSILS",
                "name": "Fossils",
                "description": "A waypoint rich in the remains of ancient life, offering a valuable window into the past and the potential for scientific discovery."
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
            "submittedOn": "2024-01-13T16:47:58.155Z"
        },
        "faction": {
            "symbol": "COSMIC"
        },
        "isUnderConstruction": false
    }
}
export const expectedSystems2 = {
    "data": {
        "systemSymbol": "X1-YP52",
        "symbol": "X1-YP52-A1",
        "type": "PLANET",
        "x": 4,
        "y": 24,
        "orbitals": [
            {
                "symbol": "X1-YP52-A3"
            },
            {
                "symbol": "X1-YP52-A2"
            },
            {
                "symbol": "X1-YP52-A4"
            }
        ],
        "traits": [
            {
                "symbol": "ROCKY",
                "name": "Rocky",
                "description": "A world with a rugged, rocky landscape, rich in minerals and other resources, providing a variety of opportunities for mining, research, and exploration."
            },
            {
                "symbol": "SCATTERED_SETTLEMENTS",
                "name": "Scattered Settlements",
                "description": "A collection of dispersed communities, each independent yet connected through trade and communication networks."
            },
            {
                "symbol": "VIBRANT_AURORAS",
                "name": "Vibrant Auroras",
                "description": "A celestial light show caused by the interaction of charged particles with the waypoint's atmosphere, creating a mesmerizing spectacle and attracting tourists from across the galaxy."
            },
            {
                "symbol": "EXPLOSIVE_GASES",
                "name": "Explosive Gases",
                "description": "A volatile environment filled with highly reactive gases, posing a constant risk to those who venture too close and offering opportunities for harvesting valuable materials such as hydrocarbons."
            },
            {
                "symbol": "MAGMA_SEAS",
                "name": "Magma Seas",
                "description": "A waypoint dominated by molten rock and intense heat, creating inhospitable conditions and requiring specialized technology to navigate and harvest resources."
            },
            {
                "symbol": "FOSSILS",
                "name": "Fossils",
                "description": "A waypoint rich in the remains of ancient life, offering a valuable window into the past and the potential for scientific discovery."
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
            "submittedOn": "2024-01-13T16:47:58.155Z"
        },
        "faction": {
            "symbol": "COSMIC"
        },
        "isUnderConstruction": false
    }
}

