---
title: Create a Backup
sidebar_position: 20
---

Backups in Longhorn are snapshots that are moved off-cluster into a backupstore. A backup of a snapshot is copied to the backupstore, and the endpoint to access the backupstore is the backup target.

> **Prerequisite:** A backup target must be set up. For more information, see [Set the BackupTarget](./set-backup-target). If the BackupTarget has not been set, you'll be presented with an error.

To create a backup,

1. Navigate to the **Volume** menu.
2. Select the volume you wish to back up.
3. Click **Create Backup.**
4. Add any appropriate labels and click OK.

**Result:** The backup is created. To see it, click **Backup** in the top navigation bar.

For information on how to restore a volume from a snapshot, refer to [this page.](./restore-from-a-backup)