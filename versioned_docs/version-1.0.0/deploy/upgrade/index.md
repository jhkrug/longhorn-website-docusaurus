---
title: Upgrade
sidebar_position: 50
toc_max_heading_level: 4
---

Here we cover how to upgrade to latest Longhorn from all previous releases.

## Upgrading Longhorn

There are normally two steps in the upgrade process: first upgrade Longhorn manager to the latest version, then upgrade the Longhorn engine to the latest version using the latest Longhorn manager.

#### 1. Upgrade Longhorn manager

- To upgrade from v0.8.1, see [this section.](./longhorn-manager#upgrading-from-v081-to-v100)
- To upgrade from v0.7.0+, see [this section.](./longhorn-manager#upgrading-from-v070) 

#### 2. Upgrade Longhorn Engine

After Longhorn Manager is upgraded, Longhorn Engine also needs to be upgraded [using the Longhorn UI.](./upgrade-engine)

## Extended Reading
Visit [Some old instance manager pods are still running after upgrade](https://longhorn.io/kb/troubleshooting-some-old-instance-manager-pods-are-still-running-after-upgrade) for more information about the cleanup strategy of instance manager pods during upgrade.

## Need Help?

If you have any issues, please report it at
https://github.com/longhorn/longhorn/issues and include your backup yaml files
as well as manager logs.
