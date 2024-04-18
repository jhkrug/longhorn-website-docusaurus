---
hide_table_of_contents: true
---

<header class="hero hero--primary heroBanner_src-pages-index-module">
<div class="container">
<h1 class="hero__title" align="center">Longhorn</h1>
<p align="center" class="hero__subtitle">Cloud native, distributed, block storage for Kubernetes</p>
<p align="center" class="hero__subtitle">Easy to use, 100% open source, run anywhere</p>
<div class="buttons_src-pages-index-module">
</div>
</div>
</header>
<br/>

## Features

### Highly available persistent storage for Kubernetes

Previously, ITOps and DevOps found it hard to add replicated storage to Kubernetes clusters.
So, many non-cloud-hosted Kubernetes clusters don’t support persistent storage.
External storage arrays are non-portable and can be expensive.

Longhorn delivers simplified, easy to deploy, and upgrade, 100% open source,
cloud-native persistent block storage.
It does this without the cost overhead of open core or proprietary alternatives.

### Easy incremental snapshots and backups

Longhorn’s built-in incremental snapshot and backup features keep volume data safe,
in or out, of the Kubernetes cluster.

Longhorn's intuitive, included, management UI
simplifies scheduled backups of persistent storage volumes in Kubernetes clusters.

### Cross-cluster disaster recovery

External replication solutions recover from a disk failure by re-replicating the entire data store.
This can take days, during which time the cluster performs poorly and has a higher risk of failure.

Using Longhorn, you can control the granularity as needed,
easily create a disaster recovery volume in another Kubernetes cluster,
and fail over to it in the event of an emergency.

If your main cluster fails, you can bring up your application in the DR cluster
quickly, with a defined RPO and RTO.

![Longhorn architecture](/img/diagrams/architecture/how-longhorn-works.svg)

<br/>
<table>
<tr>
<td>
**Originally developed by**<br/>
![Rancher logo](/img/rancher-logo-color-white-bg.png)
</td>
<td>
**Longhorn is a CNCF Incubating project**<br/>
![CNCF logo](/img/cncf-logo-color-white-bg.png)
</td>
</tr>
</table>
