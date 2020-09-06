#!/usr/bin/env fish

function awsenv --argument-names sub --argument-names profile

    switch "$sub"
        case 'saml'
            __awsenv_saml $profile
        case 'vault'
            __awsenv_vault $profile
        case 'cli'
            __awsenv_cli $profile
        case 'get'
            if set -q AWSENV_PROFILE
                echo $AWSENV_PROFILE[$AWSENV_PROVIDER]
            else
                echo "<none>"
            end
        case 'list'
            __awsenv_list
        case 'status'
            __awsenv_status
        case 'disconnect'
            __awsenv_disconnect
        case 'help'
            __awsenv_usage
        case '' '*'
            echo "unknown"
    end
end
