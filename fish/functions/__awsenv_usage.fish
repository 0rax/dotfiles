#!/usr/bin/env fish

function __awsenv_usage
    printf '# awsenv 0.1.0 (https://github.com/0rax/awsenv.fish)

A simple multi-provider AWS profile manager for fish-shell with backed-in
supports for saml2aws and aws-vault. The aws-cli is required for this software
to work.

Usage:

    awsenv saml <profile>
        Switch current profile to <profile> using saml2aws

    awsenv vault <profile>
        Switch current profile to <profile> using aws-vault

    awsenv cli <profile>
        Switch current profile to <profile> using aws-cli

    awsenv get
        Print currently loaded profile (if "<none>" is returned, the aws-cli
        will use its default profile)

    awsenv list
        List all available profiles (sorted by provider)

    awsenv status
        Get the current status of the loaded profile, including the account
        number linked to it and the configured region if any

    awsenv disconnect
        Cleanup all aws and awsenv related environment variables from the
        current shell session

    awsenv help
        Print this help and exit

'

end
