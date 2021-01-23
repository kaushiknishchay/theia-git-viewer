/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from 'inversify';
import { TheiaGitViewerStorageContribution } from './theia-git-viewer-contribution';
import {TheiaGitViewerStorageProvider} from './theia-git-viewer-storage-provider';
import { FileServiceContribution } from '@theia/filesystem/lib/browser/file-service';

export default new ContainerModule((bind, unbind, isBound, rebind) => {

    bind(TheiaGitViewerStorageProvider).toSelf().inSingletonScope();
    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(TheiaGitViewerContribution)
    bind(TheiaGitViewerStorageContribution).toSelf().inSingletonScope();
    rebind(FileServiceContribution).toService(TheiaGitViewerStorageContribution);
});
