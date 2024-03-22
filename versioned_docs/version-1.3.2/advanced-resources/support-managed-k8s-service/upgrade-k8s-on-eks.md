---
title: Upgrade Kubernetes on AWS EKS
sidebar_position: 4
---

<head>
  <link rel="canonical" href="https://main--longhornio-docusaurus.netlify.app/advanced-resources/support-managed-k8s-service/upgrade-k8s-on-eks"/>
</head>

In Longhorn, set `replica-replenishment-wait-interval` to `0`.

See [Updating a cluster](https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html) for instructions.

> **Note:** If you have created [addition disks](./manage-node-group-on-eks#create-additional-volume) for Longhorn, you will need to manually add the path of the mounted disk into the disk list of the upgraded nodes.