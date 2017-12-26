const appModel = (function() {
    const data = {
        "topic":"Feasibility Study",
        "items": 
        [
            {   "area": "Engineering",
                "checks": 
                [
                    {   "code": "Subarea1",
                        "description": "Pay attention...",
                        "subject": 
                        [
                            {
                                "name": "Check 1",
                                "priority": 1
                            },
                            {
                                "name": "Check 2",
                                "priority": 1
                            },
                            {
                                "name": "Check 3",
                                "priority": 2
                            },
                            {
                                "name": "Check 4",
                                "priority": 2
                            }
                        ]
                    },
                    {   "code": "Subarea2",
                        "description": "Pay attention...",
                        "subject": 
                        [
                            {
                                "name": "Check 1",
                                "priority": 2
                            },
                            {
                                "name": "Check 2",
                                "priority": 3
                            },
                            {
                                "name": "Check 3",
                                "priority": 2
                            }
                        ]
                    } 
                ]
            },
            {   "area": "Procurement",
                "checks": 
                [
                    {   "code": "Subarea1",
                        "description": "Check proc this",
                        "subject": 
                        [
                            {
                                "name": "Check 1",
                                "priority": 3
                            },
                            {
                                "name": "Check 2",
                                "priority": 3
                            },
                            {
                                "name": "Check 3",
                                "priority": 3
                            }
                        ]
                    },
                    {   "code": "Subarea2",
                        "description": "Check also proc that",
                        "subject": 
                        [
                            {
                                "name": "Check 1",
                                "priority": 2
                            },
                            {
                                "name": "Check 2",
                                "priority": 2
                            },
                            {
                                "name": "Check 3",
                                "priority": 2
                            }
                        ]
                    } 
                ]
            }
        ]
    },
    init = function() {
        return data;
    };
    return {init: init};
})();