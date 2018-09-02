<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/var/www/html/user/themes/bpho/blueprints.yaml',
    'modified' => 1531648910,
    'data' => [
        'name' => 'BPhO',
        'version' => '0.1.0',
        'description' => 'Custom theme for BPhO',
        'icon' => 'rebel',
        'author' => [
            'name' => 'Roger Hutchings',
            'email' => 'roger@peroshi.com'
        ],
        'homepage' => 'https://github.com/roger-hutchings/grav-theme-bpho',
        'demo' => 'http://demo.yoursite.com',
        'keywords' => 'grav, theme, etc',
        'bugs' => 'https://github.com/roger-hutchings/grav-theme-bpho/issues',
        'readme' => 'https://github.com/roger-hutchings/grav-theme-bpho/blob/develop/README.md',
        'license' => 'MIT',
        'form' => [
            'validation' => 'loose',
            'fields' => [
                'dropdown.enabled' => [
                    'type' => 'toggle',
                    'label' => 'Dropdown in Menu',
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        1 => 'PLUGIN_ADMIN.ENABLED',
                        0 => 'PLUGIN_ADMIN.DISABLED'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ]
            ]
        ]
    ]
];
